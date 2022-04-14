import {UserState, UserAction} from '../../types/userType'

const FETCH_USERS = 'FETCH_USERS'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS' //Если успешно загрузили
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR' //Если ошибка

const defaultStyle: UserState = {
   users: [], 
   loading: true,
   error: null
}

export const userReducer = (state = defaultStyle, action: UserAction): UserState =>{
   switch(action.type){
      case FETCH_USERS:
         return {loading: true, error: null,  users: []}
      case FETCH_USERS_SUCCESS:
         return {loading: false, error: null,  users: action.payload}
      case FETCH_USERS_ERROR:
         return {loading: false, error: action.payload,  users: []}
      default:
         return state;
   }
}

export const fetchUsersAction = () => ({type: FETCH_USERS, payload: null})
export const fetchUsersSuccessAction = (payload: []) => ({type: FETCH_USERS_SUCCESS, payload})
export const fetchUsersErrorAction = (payload: string) => ({type: FETCH_USERS_ERROR, payload})