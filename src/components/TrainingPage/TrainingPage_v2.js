import { useState } from "react";
import { connect } from "react-redux";
import { setCurrentWordNumb, setMainText } from "../../store/trainingPageReducer";
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
  let [engine, setEngin] = useState(new Engine(props.words, updateCallback));
  let c = engine.words.map((w, ind) => { return <Word key={w.word + ind} word={w} /> });
  let [words, setWords] = useState(c);

  function updateCallback(w, ind) {
    const temp = [...words];
    temp[ind] = <Word key={w.word + ind} word={w} />;
    setWords(temp);
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
          <input type="text" onKeyPress={event => engine.nextKey(event.key)}
            value={engine.writingString}
          /> <span>{engine.counterSimbols}</span>
          {/* <Word word={"abc d"}></Word> */}
          <p>{engine.writingString}</p>
        </div>
      </div>
      <div>current word numb: {props.currentWordNumb}. <button onClick={() => props.setCurrentWordNumb(props.currentWordNumb + 1)} >++</button></div>
      <div>"lo rem": {props.currentWordNumb}. <button onClick={() => { props.setMainText("lo rem"); setEngin(new Engine(props.words)); }} >++</button></div>
      {/* <button onClick={setWords(engine.words.map((w, ind) => {
    <Word key={w.word + ind} word={w} />}))}>setWords</button> */}
    </div>
  )
}


class Engine {
  constructor(words, updateCallback) {
    this.words = words.map((w, ind) => new WordEngin(w + " "));
    this.currentWordNumb = 0;
    this.counterSimbols = 0;
    this.writingString = "";
    this.updateCallback = updateCallback;

    this.nextKey = this.nextKey.bind(this);
  }

  nextKey(key) {
    console.log(key);
    if (this.checkKey(key)) {
      this.updateCallback(this.words[this.currentWordNumb], this.currentWordNumb);
      this.writingString = this.writingString + key;
      this.counterSimbols++;
      if (this.words[this.currentWordNumb].setKeyA(key)) {
        this.currentWordNumb += 1;
        speech(this.words[this.currentWordNumb].word);
      }
    };
  }

  static validChars = [" ", ",", ".", "!", "?", "-", "+"];

  checkKey(key) {
    return true;
    // (key >= "A" && key <= "Z")
    //   || (key >= "a" && key <= "z")
    //   || (key >= "0" && key <= "9")
    //   || key == " " || key == "," || key == "." || key == "!";
  }
}



let RED = "text__red", GREEN = "text__green";

class WordEngin {
  constructor(word) {
    this.word = word;
    this.chars = word.split("").map((ch) => ({ char: ch, className: null, }));
    this.currentChar = 0;
  }

  setKeyA = (key) => {
    if (this.chars[this.currentChar].char == key) this.setClassForChar(GREEN);
    else this.setClassForChar(RED);
    return this.currentChar == this.chars.length ? true : false;
  }

  setClassForChar = (className) => {
    this.chars[this.currentChar].className = className;
    this.currentChar++;
  }
}


function mapStateToProps(state) {
  return {
    currentWordNumb: state.trainingPage.currentWordNumb,
    words: state.trainingPage.words,
  }
}

export default connect(mapStateToProps, {
  setMainText,
  setCurrentWordNumb,
})(TrainingPage);


/*
окно с образцом текста:
  текст подсвечивается
    подсветка текущего символа, верных и пропущеных символов.
    озвучивание текущего слова

форма ввода


*/