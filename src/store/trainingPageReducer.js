
let w = "lo rem ipsum dolor sit, amet consectetur";
const initialState = {
  mainText: w,
  words: w.split(" "),
  currentWordNumb: 0,
}

const trainingPageReducer = function (state = initialState, action) {
  switch (action.type) {
    case SET_MAIN_TEXT: {
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
    default: return state;
  }
}

const SET_MAIN_TEXT = "SET-MAIN-TEXT";
const SET_CURRENT_WORD_NUMB = "SET-CURRENT-WORD-NUMB";

export function setMainText(text) { return { type: SET_MAIN_TEXT, text, } };
export function setCurrentWordNumb(numb) { return { type: SET_CURRENT_WORD_NUMB, numb, } };

export default trainingPageReducer;