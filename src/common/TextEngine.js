

class TextEngine {
  constructor(text, words, classColors) {
    this.text = text;
    this.words = words.map((w, ind) => new WordEngine(w + " ", classColors));
    this.currentWordNumb = 0;
    this.counterSimbols = 0;
    this.writingString = "";

    this.nextKey = this.nextKey.bind(this);
  }

  checkEnded() { return this.text.length == this.counterSimbols; }

  nextKey(key) {
    console.log(key);

    this.writingString = this.writingString + key;
    this.counterSimbols++;
    if (this.words[this.currentWordNumb].setKeyA(key)) {
      this.currentWordNumb += 1;
      // speech(this.words[this.currentWordNumb].word);
    }
  }
  
  static validChars = [" ", ",", ".", "!", "?", "-", "+"];
  
  checkKey(key) {    
    return Boolean(key);
    // (key >= "A" && key <= "Z")
    //   || (key >= "a" && key <= "z")
    //   || (key >= "0" && key <= "9")
    //   || key == " " || key == "," || key == "." || key == "!";
  }
}



let RED = "text__red", GREEN = "text__green";

class WordEngine {
  constructor(word, classColors) {
    this.word = word;
    this.chars = word.split("").map((ch) => ({ char: ch, className: null, }));
    this.currentChar = 0;
    this.correctly = classColors[0];
    this.mistake = classColors[1];
  }

  setKeyA = (key) => {
    if (this.chars[this.currentChar].char == key) this.setClassForChar(this.correctly);
    else this.setClassForChar(this.mistake);
    return this.currentChar == this.chars.length ? true : false;
  }

  setClassForChar = (className) => {
    this.chars[this.currentChar].className = className;
    this.currentChar++;
  }
}

export default TextEngine;