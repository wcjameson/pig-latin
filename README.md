## Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2

## Describe: numberOfOccurrencesInText()

Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "If an empty string is passed in as a word, it should return 0."
Code:
const word = "";
const text = "red RED Red!";
wordCounter(word, text);
Expected Output: 0

## Describe: boldPassage()

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: "<p>yo</p>"

Test: "It should return a matching word in a b tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: "<p><b>hello</b></p>"

Test: "It should wrap words that match in `b` tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: "<p><b>hello</b> there</p>"


## Describe: getDuplicateWordCount 

Test: "It should return 1"
Code:
const sentence = "doesn't matter what the text is";
getDuplicateWordCount(sentence);
Expected Output: 1

Test: "It should return the same split input"
Code:
const sentence = "Any sentence you like";
getDuplicateWordCount(sentence);
Expected Output: [Any, sentence, you, like]

Test: "It should return formatted <p> with count of each word occurrence"
Code:
const sentence = "Any sentence you like, you can be any sentence sometimes";
getDuplicateWordCount(sentence);
Expected Output: <p>Any: 2<br>
                  sentence: 2<br>
                  you: 2<br>
                  like,: 1<br>
                  you: 2<br>
                  can: 1<br>
                  be: 1<br>
                  any: 2<br>
                  sentence: 2<br>
                  sometimes: 1<br>
                  </p>

Test: "It should return formatted <p> with count of each word occurrence"
Code:
const sentence = "Any sentence you like, you can be any sentence sometimes";
getDuplicateWordCount(sentence);
Expected Output: <p>Any: 2<br>
                  sentence: 2<br>
                  you: 2<br>
                  like,: 1<br>
                  you: 2<br>
                  can: 1<br>
                  be: 1<br>
                  any: 2<br>
                  sentence: 2<br>
                  sometimes: 1</p>

## Describe: mostUsedWords

Test: "It should return 1"
Code:
const sentence = "Any sentence you like";
mostUsedWords(sentence);
Expected Output: 1                                  



## Describe: vowelCounter();

Test: "It recognizes a single vowel."
Code: vowelCounter("a");
Expected Output: 1

Test: "It recognizes a single vowel regardless of case."
Code: vowelCounter("A");
Expected Output: 1

Test: "It recognizes a single vowel in a word with multiple characters."
Code: vowelCounter("cat");
Expected Output: 1

Test: "It recognizes multiple vowels in a single word."
Code: vowelCounter("cater");
Expected Output: 2

Test: "It recognizes vowels in a multiple-word sentence."
Code: vowelCounter("cats catered the event");
Expected Output: 7

Test: "It recognizes vowels in a multiple word sentence regardless of capitalization."
Code: vowelCounter("CATS CATERED THE EVENT");
Expected Output: 7

Test: "It recognizes all vowels in a multiple-word sentence regardless of inconsistent capitalization."
Code: vowelCounter("CaTS CATEReD ThE EveNT");
Expected Output: 7

Test: "It ignores non-alphabetical characters since they can't be vowels."
Code: vowelCounter("*&$92%");
Expected Output: 0





## Describe: pigLatin();

Test: "It should return vowel + way"
Code:
const sentence = "a";
pigLatin(sentence);
Expected Output: "away"

Test: "It should return consonant + ay"
Code:
const sentence = "c";
pigLatin(sentence);
Expected Output: "cay"

Test: "For word beginning with vowels, add way to end"
Code:
const sentence = "apple";
pigLatin(sentence);
Expected Output: "appleway"

Test: "For word beginning with consonants, move consonant to end of word, add ay to end of word"
Code:
const sentence = "movies";
pigLatin(sentence);
Expected Output: "oviesmay"

Test: "For multi word strings beginning with vowels, add way to end of any vowel words"
Code:
const sentence = "apple orange";
pigLatin(sentence);
Expected Output: "appleway orangeway"

Test: "For multi word strings beginning with consonants, add ay to end of any consonant words"
Code:
const sentence = "carrot danger";
pigLatin(sentence);
Expected Output: "arrotcay angerday"

Test: "For strings with (1)vowel words and (2)consonant words, add either (1)way or (2)letter flip+ay"
Code:
const sentence = "apples have some danger";
pigLatin(sentence);
Expected Output: "applesway avehay omesay angerday"

Test: "For words that start with q or qu, move q ro qu to end of word, add ay"
Code:
const sentence = "quick";
pigLatin(sentence);
Expected Output: "icksquay"

