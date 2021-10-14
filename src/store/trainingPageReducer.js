import TextEngine from "../common/TextEngine";

let w = "lo rem ipsum dolor sit, amet consectetur";
let classColors = ["text__green1", "text__red1"];
let textEngine = new TextEngine(w, w.split(" "), classColors);

const initialState = {
  mainText: w,
  words: w.split(" "),
  currentWordNumb: 0,
  settings: { 
    classColors: classColors,
  },
  textEngine: textEngine,
}

const trainingPageReducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_MAIN_TEXT: {
      console.log(action.text);
      return {
        ...state,
        mainText: action.text,
        words: action.text.split(" "),
        currentWordNumb: 0,
      }
    }
    case SET_CURRENT_WORD_NUMB: {
      return {
        ...state,
        currentWordNumb: action.numb,
      }
    }
    case GET_TEXT_ENGINE: {
      return {
        ...state,
        textEngine: action.engine,
      }
    }
    case RESET: {
      return {
        ...state,
        textEngine: new TextEngine(state.mainText, [...state.words], state.settings.classColors),
      }
    }
    case SET_SETTINGS: {
      return {
        ...state,
        settings: {
          ...state.settings,
          classColors: action.settings.classColors,
        }
      }
    }

    default: return state;
  }
}

const SET_MAIN_TEXT = "SET-MAIN-TEXT";
const SET_CURRENT_WORD_NUMB = "SET-CURRENT-WORD-NUMB";
const GET_TEXT_ENGINE = "SET-TEXT-ENGINE";
const RESET = "RESET";
const SET_SETTINGS = "SET-SETTINGS";

export function setMainText(text) { return { type: SET_MAIN_TEXT, text, } };
export function setCurrentWordNumb(numb) { return { type: SET_CURRENT_WORD_NUMB, numb, } };
export function getTextEngine(engine) { return { type: GET_TEXT_ENGINE, engine, } };
export function reset() { return { type: RESET, } };
export function setSettings(settings) { return { type: SET_SETTINGS, settings: settings, } };

export default trainingPageReducer;