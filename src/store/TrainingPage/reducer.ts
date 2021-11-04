import { combineReducers } from "redux";
import TextEngine from "../../common/TextEngine";
import { TCombineActions, TrainingPageActionTypes } from "./actions";


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

const trainingPageReducer = function (state = initialState, action: TCombineActions) {
  switch (action.type) {
    case TrainingPageActionTypes.SET_MAIN_TEXT: {
      console.log(action.text);
      return {
        ...state,
        mainText: action.text,
        words: action.text.split(" "),
        currentWordNumb: 0,
      }
    }
    case TrainingPageActionTypes.SET_CURRENT_WORD_NUMB: {
      return {
        ...state,
        currentWordNumb: action.numb,
      }
    }
    case TrainingPageActionTypes.GET_TEXT_ENGINE: {
      return {
        ...state,
        textEngine: action.engine,
      }
    }
    case TrainingPageActionTypes.RESET: {
      return {
        ...state,
        textEngine: new TextEngine(state.mainText, [...state.words], state.settings.classColors),
      }
    }
    case TrainingPageActionTypes.SET_SETTINGS: {
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

// const trainingPage = combineReducers<IStateTraininPage>({ TP: trainingPageReducer });
export default trainingPageReducer;


interface IInitialState {
  mainText: string,
  words: string[],
  currentWordNumb: number,
  settings: ISetting,
  textEngine: TextEngine,
}
export interface ISetting { classColors: string[], }
export interface IStateTraininPage { TP: IInitialState, }