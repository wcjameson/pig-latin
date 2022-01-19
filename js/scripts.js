// Utility logic

function noInputtedWord(word,text) {
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// Business Logic

function wordCounter(text) {
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) {
  if (noInputtedWord) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function boldPassage(word, text) {
  if (noInputtedWord) {
    return 0;
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      htmlString = htmlString.concat("<b>" + element + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

function getDuplicateWordCount (sentence) {
  let sentenceArray = sentence.split(" ");
  let wordCountArray = [];
  let paragraph = "<p>";
  let count;
  sentenceArray.forEach(function(word, index) {
    count = 0;
    sentenceArray.forEach(function (compareWord) {
      if (word === compareWord) {
        count++;
      }
      wordCountArray[index] = count;
    });
    //console.log(word + ": " + count);
    paragraph = paragraph.concat(word + ": " + count);
    if (index !== (sentenceArray.length - 1)) {
      paragraph = paragraph.concat("<br>");
    }
  });
  paragraph = paragraph.concat("</p>");
  return paragraph;
}

function getWordCount (sentence, word) {

}

function mostUsedWords(sentence) {
  let sentenceArray = sentence.split(" ");
  sentenceArray.forEach(function(word, index) {


  })


}

// function removeOffensiveWords (sentence) {
//   const badWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
//   let output = sentence;
//   badWords.forEach(function(word) {
//     //console.log(sentence.replace(word,"*****"));
//     if (sentence.toLowerCase().indexOf(word) > -1) {
//       //console.log("the condition is true");
//       output = output.toLowerCase().replace(word,"*****");
//     }
//   })
//   console.log(output);
// }



function removeOffensiveWordsTwo (sentence) {
  const badWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  let stringArray = sentence.split(" ");



  stringArray.forEach(function (word, index) {
    badWords.forEach(function(replacementWord) {
      if (word.toLowerCase().includes(replacementWord.toLowerCase())) {
        stringArray[index] = "*****";
      }
    })
  })
  console.log(stringArray.join(" "));
}

//removeOffensiveWordsTwo("This is zoinks! Muppeteer are biffaroni ya big loopdaloop");


// UI Logic

$(document).ready(function() {
  $("form#word-counter").submit(function(event) {
    event.preventDefault();
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
  });
});





$('form#form').submit(function(event) {
  event.preventDefault();
  $('ul#result').empty();
  
  let textArray = $('input#sentence').val().toLowerCase().split(" ");
  let multiDimArray = [];
  let uniqueArray = textArray.filter( function( item, index, inputArray ) {
    return inputArray.indexOf(item) === index;
  }); 

  uniqueArray.forEach(function(word) {
    let count = 0;
    textArray.forEach(function(secondRun) {
      if (word === secondRun) {
        count++;
      }
    });
    multiDimArray.push([count,word]);
  });

  console.log(multiDimArray.sort().reverse());
  
  multiDimArray.sort().reverse().forEach(function(obj) {
    $('ul#result').append("<li>" +  obj[1] + " " + obj[0] +  "</li>");
  });
  
  $("#sentence").val("");  
});