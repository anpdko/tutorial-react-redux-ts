import { combineReducers } from "redux";
import {userReducer} from "./userReducer"
import {todoReducer} from "./todoReducer"

export const rootReducer = combineReducers({
   user: userReducer,
   todo: todoReducer
})

//Добавляем тип для обращение к определеному состоянии
export type RootState = ReturnType<typeof rootReducer>