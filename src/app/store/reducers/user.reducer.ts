import { userActions } from "../actions/user.actions";

export interface State {
    isLoggedIn: boolean,
    firstName: string,
    lastName: string,
}
  
 const INITIAL_USER_STATE: State  = {
     isLoggedIn : true,
     firstName : null,
     lastName : null
 }

 export function userReducer(state = INITIAL_USER_STATE, action: userActions) {
    switch(action.type) {
        case 'CREATE_USER_SUCCESS':
            return {
                ...state,
                firstName : action.payload.firstName,
                lastName : action.payload.lastName,
                isLoggedIn : true
            }

        case 'CREATE_USER_ERROR':
        case 'LOGIN_USER_ERROR':
            return INITIAL_USER_STATE
    }
    return state;
}