import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../store/reducers";

//обычный useSelector только с типом
export const useTypeSelector:TypedUseSelectorHook<RootState> = useSelector