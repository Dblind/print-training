import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TAuthRootReducer } from "../store/Authentication/indexAuth";

export const useTypedSelector: TypedUseSelectorHook<TAuthRootReducer> = useSelector;