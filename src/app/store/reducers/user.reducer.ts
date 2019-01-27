import { Item } from "models.ts/item.model";
import { userActions } from "../actions/user.actions";

export interface State {
    isLoggedIn: boolean,
    toDo?: { taskId : Item }[],
    upcoming?: { taskId : Item }[],
    completed?: { taskId : Item }[],
}
  
 const INITIAL_USER_STATE: State  = {
     isLoggedIn : false,
 }

 export function userReducer(state = INITIAL_USER_STATE, action: userActions) {
    switch(action.type) {
        case 'CREATE_USER_SUCCESS':
        case 'LOGIN_USER_SUCCESS':
            return {
                isLoggedIn : true,
                ...state
            }

        case 'CREATE_USER_ERROR':
        case 'LOGIN_USER_ERROR':
        alert('in reducer');
            return INITIAL_USER_STATE
    }

    return state;
}