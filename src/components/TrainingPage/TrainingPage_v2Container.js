import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { setCurrentWordNumb, setMainText, getTextEngine, reset } from "../../store/trainingPageReducer";
import css from './TrainingPage.module.css';
import TrainingPage_v2 from "./TrainingPage_v2";
import Word from "./Word";

const cl = console.log;
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

function TrainingPageContainer(props) {
  let [engine, setEngin] = useState(props.textEngine);
  let [wordComponents, setWordComponents] = useState([]);
  let [arrayKey, setArrayKey] = useState(0);
  let [inputOnPressKey, setInputOnPressKey] = useState({ handler: handlerOnPressKey, });

  function updateWord(w, ind) {
    const temp = [...wordComponents];
    temp[ind] = <Word key={w.word + ind + arrayKey} word={w} />;
    setWordComponents(temp);
  }

  useEffect(() => {
    // if (props.textEngine != engine) 
    {
      const offsetKey = arrayKey + 1;
      let wordComponents = props.textEngine.words.map((word, ind) => { return <Word key={word.word + ind + offsetKey} word={word} /> });
      setWordComponents(wordComponents);
      setEngin(props.textEngine);
      setInputOnPressKey({ handler: handlerOnPressKey, });
      setArrayKey(offsetKey);
    }
    cl("use effect train page", wordComponents);
  }, [props.textEngine]);


  function handlerOnPressKey(event) {
    if (engine.checkEnded()) return "Done";
    if (engine.checkKey(event.key)) {
      updateWord(engine.words[engine.currentWordNumb], engine.currentWordNumb)
      engine.nextKey(event.key);    // order up ????????
      // if (engine.nextKey(event.key)) setInputOnPressKey({ handler: wordsEnded, });
    } else return "Wrong letter!";
  }

  function wordsEnded() {

  }


  function reset() {
    props.reset();
    // setWords([]);
    // let wordComponents = engine.words.map((w, ind) => { return <Word key={w.word + ind} word={w} /> });
    //   setWords(wordComponents);
    //   setEngin(props.textEngine);

    // setEngin(props.textEngine);
    // let temp = engine.words.map((w, ind) => { return <Word key={w.word + ind + 1} word={w} /> });
    // setWords(temp);
    // console.log(temp);
  }

  return (
    <div>
      <TrainingPage_v2
        words={wordComponents}
        inputOnPressKey={handlerOnPressKey}
        writingString={engine.writingString}
        reset={reset}
        setMainText={props.setMainText}
      />


      {/* <div>
        Window with text.
        <div className={css.windowWithText}>
          {words}
          <ShowWords words={words} />
          <input type="text" onKeyPress={event => inputOnPressKey(event)}
            value={engine.writingString}
          /> <span>{engine.counterSimbols}</span>
          <p>{engine.writingString}</p>

          <form >
            <textarea type="text" name="reset" id="reset" />
            <input type="button" onClick={() => reset()} value="reset" />
          </form>
        </div>
      </div> */}
    </div>
  )
}

function ShowWords(props) {
  return (
    <div>
      {props.words}
    </div>
  )
}




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
})(TrainingPageContainer);


/*
окно с образцом текста:
  текст подсвечивается
    подсветка текущего символа, верных и пропущеных символов.
    озвучивание текущего слова

форма ввода


*/