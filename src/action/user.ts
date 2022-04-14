import { UserAction } from "../types/userType"
import { Dispatch } from "redux"
import axios from "axios"
import {fetchUsersAction, fetchUsersSuccessAction, 
   fetchUsersErrorAction} from "../store/reducers/userReducer"


export const fetchUsers = () => {
   return async (dispatch: Dispatch<UserAction>) => {
      try{
         dispatch(fetchUsersAction())
         const response = await axios.get('https://jsonplaceholder.typicode.com/users')
         dispatch(fetchUsersSuccessAction(response.data))
      } catch(err) {
         dispatch(fetchUsersErrorAction("Произошла ошибка при загрузке пользователей"))
      }
   }
}