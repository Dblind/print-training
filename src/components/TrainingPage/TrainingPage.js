import { useState } from "react";
import { connect } from "react-redux";
import { setCurrentWordNumb, setMainText } from "../../store/trainingPageReducer";
import css from './TrainingPage.module.css';
import Word from "./Word";

let currentWord = 0;
let textExapmle = "lo rem ipsum dolor sit, amet consectetur adipisicing elit. Dolor odit aut earum, itaque fuga fugiat doloribus. Quam modi molestiae quibusdam!";
const splitedWords = textExapmle.split(" ").map(w => { return { word: w, className: null, } });
let collectedWord = "";

function TrainingPage(props) {
  var synth = window.speechSynthesis;
  function speech(inputText = "nothingf") {

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

  let [counter, setCounter] = useState(0);
  let [collectedWord, setAddChar] = useState("");

  function getNextWord() { if (currentWord < splitedWords.length) return splitedWords[currentWord++] };

  const check = (event) => {
    // console.log(event.code, typeof event.key);

    let key = event.key;

    if (key >= "a" && key <= "z" || key == " ") {
      setAddChar(`${collectedWord}${key}`);
      console.log(collectedWord);
      // console.log(key >= "a", key <= "z")

      setCounter(counter + 1);
      // if (counter == 0) ;
      if (counter == splitedWords[currentWord].word.length) {
        console.log(collectedWord);
        if (splitedWords[currentWord].word == collectedWord) {
          splitedWords[currentWord].className = "text__green"
        } else splitedWords[currentWord].className = "text__red"
        setAddChar("");
        setCounter(0);
        currentWord++;
        speech(splitedWords[currentWord].word);
      }
      //   event.target.value = "#";
      //   currentWord++;
      //   setCounter(0);
      //   speech(splitedWords[currentWord].word)
      // } else setCounter(counter + 1)
    }
  }

  props.setCurrentWordNumb(4);
  props.setMainText("lo rem");
  return (
    <div>
      <p>{textExapmle}</p>
      <button onClick={() => speech(getNextWord())}>push</button>
      <input type="text"
        // onChange={event => check()}
        onKeyDown={(event) => { check(event); }}
      />
      <p>Counter: {counter}.</p>
      <p>Collected word: {collectedWord}</p>

      <div>
        <div className={css.windowWithText}>
          {splitedWords.map((w, ind) => <div key={ind} className={css.text}><span className={css[w.className]}>{w.word}</span></div>)}
          Window with text.
          <Word word={"abc d"}></Word>
        </div>
      </div>
      <div>current word numb: {props.currentWordNumb}. <button >++</button></div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currentWordNumb: state.trainingPage.currentWordNumb,
  }
}

export default connect(mapStateToProps, {
  setMainText,
  setCurrentWordNumb, })(TrainingPage);


/*
окно с образцом текста:
  текст подсвечивается
    подсветка текущего символа, верных и пропущеных символов.
    озвучивание текущего слова

форма ввода


*/