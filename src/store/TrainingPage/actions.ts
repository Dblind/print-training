import TextEngine from "../../common/TextEngine";
import { ISetting } from "./reducer";

interface ISetMainText { type: TrainingPageActionTypes.SET_MAIN_TEXT, text: string, }
interface ISetCurrentWordNumb { type: TrainingPageActionTypes.SET_CURRENT_WORD_NUMB, numb: number, }
interface IGetTextEngint { type: TrainingPageActionTypes.GET_TEXT_ENGINE, engine: TextEngine, }
interface IReset { type: TrainingPageActionTypes.RESET, }
interface ISetSettings { type: TrainingPageActionTypes.SET_SETTINGS, settings: ISetting }

export type TCombineActions = ISetMainText | ISetCurrentWordNumb | IGetTextEngint | IReset | ISetSettings; 

export function setMainText(text: string): TCombineActions { return { type: TrainingPageActionTypes.SET_MAIN_TEXT, text, } };
export function setCurrentWordNumb(numb: number): TCombineActions { return { type: TrainingPageActionTypes.SET_CURRENT_WORD_NUMB, numb, } };
export function getTextEngine(engine: TextEngine): TCombineActions { return { type: TrainingPageActionTypes.GET_TEXT_ENGINE, engine, } };
export function reset(): TCombineActions { return { type: TrainingPageActionTypes.RESET, } };
export function setSettings(settings: ISetting): TCombineActions { return { type: TrainingPageActionTypes.SET_SETTINGS, settings: settings, } };

export enum TrainingPageActionTypes {
  SET_MAIN_TEXT = "SET-MAIN-TEXT",
  SET_CURRENT_WORD_NUMB = "SET-CURRENT-WORD-NUMB",
  GET_TEXT_ENGINE = "SET-TEXT-ENGINE",
  RESET = "RESET",
  SET_SETTINGS = "SET-SETTINGS",
}