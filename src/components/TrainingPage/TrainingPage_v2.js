import { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { setCurrentWordNumb, setMainText, getTextEngine, reset } from "../../store/trainingPageReducer";
import css from './TrainingPage.module.css';
import Word from "./Word";

let textExapmle = "lo rem ipsum dolor sit, amet consectetur adipisicing elit. Dolor odit aut earum, itaque fuga fugiat doloribus. Quam modi molestiae quibusdam!";


function speech(inputText = "nothingf") {
  var synth = window.speechSynthesis;
  let text = inputText;
  // inputForm.onsubmit = function (event) {
  //   event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(text);
  // var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  // for (i = 0; i < voices.length; i++) {
  //   if (voices[i].name === selectedOption) {
  //     utterThis.voice = voices[i];
  //   }
  // }
  synth.speak(utterThis);
  // inputTxt.blur();
}

function TrainingPage(props) {
  let [engine, setEngin] = useState(props.textEngine);
  let wordComponents = engine.words.map((w, ind) => { return <Word key={w.word + ind} word={w} /> });
  let [words, setWords] = useState(wordComponents);

  function updateWord(w, ind) {
    const temp = [...words];
    temp[ind] = <Word key={w.word + ind} word={w} />;
    setWords(temp);
  }

  function inputOnPressKey(event) {
    if (engine.checkKey(event.key)) {
      updateWord(engine.words[engine.currentWordNumb], engine.currentWordNumb)
      engine.nextKey(event.key);
    }
  }

  // props.setCurrentWordNumb(4);
  // props.setMainText("lo rem");

  // (event) => { 
  //   engine.nextKey(event.key); 
  //   setWords(engine.words.map((w, ind) => { 
  //     return <Word key={w.word + ind} word={w} /> })) };

  return (
    <div>

      <div>
        Window with text.
        <div className={css.windowWithText}>
          {words}
          <input type="text" onKeyPress={event => inputOnPressKey(event)}
            value={engine.writingString}
          /> <span>{engine.counterSimbols}</span>
          {/* <Word word={"abc d"}></Word> */}
          <p>{engine.writingString}</p>

          <form >
            <textarea type="text" name="reset" id="reset" />
            <input type="button" onClick={() => reset()} value="reset" />
          </form>
        </div>
      </div>
    </div>
  )
}


// class TextEngine {
//   constructor(words, updateCallback, classColors) {
//     this.words = words.map((w, ind) => new WordEngine(w + " ", classColors));
//     this.currentWordNumb = 0;
//     this.counterSimbols = 0;
//     this.writingString = "";
//     this.updateCallback = updateCallback;

//     this.nextKey = this.nextKey.bind(this);
//   }

//   nextKey(key) {
//     console.log(key);
//     if (this.checkKey(key)) {
//       this.updateCallback(this.words[this.currentWordNumb], this.currentWordNumb);
//       this.writingString = this.writingString + key;
//       this.counterSimbols++;
//       if (this.words[this.currentWordNumb].setKeyA(key)) {
//         this.currentWordNumb += 1;
//         speech(this.words[this.currentWordNumb].word);
//       }
//     };
//   }

//   static validChars = [" ", ",", ".", "!", "?", "-", "+"];

//   checkKey(key) {
//     return true;
//     // (key >= "A" && key <= "Z")
//     //   || (key >= "a" && key <= "z")
//     //   || (key >= "0" && key <= "9")
//     //   || key == " " || key == "," || key == "." || key == "!";
//   }
// }



// let RED = "text__red", GREEN = "text__green";

// class WordEngine {
//   constructor(word, classColors) {
//     this.word = word;
//     this.chars = word.split("").map((ch) => ({ char: ch, className: null, }));
//     this.currentChar = 0;
//     this.correctly = classColors.correctly;
//     this.mistake = classColors.mistake;
//   }

//   setKeyA = (key) => {
//     if (this.chars[this.currentChar].char == key) this.setClassForChar(this.correctly);
//     else this.setClassForChar(this.mistake);
//     return this.currentChar == this.chars.length ? true : false;
//   }

//   setClassForChar = (className) => {
//     this.chars[this.currentChar].className = className;
//     this.currentChar++;
//   }
// }


function mapStateToProps(state) {
  return {
    currentWordNumb: state.trainingPage.currentWordNumb,
    words: state.trainingPage.words,
    textEngine: state.trainingPage.textEngine,
  }
}

export default connect(mapStateToProps, {
  setMainText,
  setCurrentWordNumb,
  getTextEngine,
  reset,
})(TrainingPage);


/*
окно с образцом текста:
  текст подсвечивается
    подсветка текущего символа, верных и пропущеных символов.
    озвучивание текущего слова

форма ввода


*/