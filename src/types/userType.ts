
export interface UserState {
   users: any[];
   loading: boolean;
   error: null | string;
}

export interface UserAction {
   type: string;
   payload?: any;
}