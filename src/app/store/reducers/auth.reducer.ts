import { AuthActions, AuthActionTypes } from '../../auth/actions/auth.actions';

import { Action } from "@ngrx/store";

export interface State {
    isLoggedIn: boolean;
}

export const INITIAL_STATE: State = {
    isLoggedIn: false
}

export function authReducer (state = INITIAL_STATE, action: AuthActions) {
    switch(action.type) {
        case AuthActionTypes.LoginComplete:
            return { ...state, isLoggedIn: true };

        case AuthActionTypes.LogoutConfirmed:
            return { isLoggedIn: false } // the initial state has isLoggedIn set to false
    }
    
    return state;
}

export const selectIsLoggedIn = (state: State) => state.isLoggedIn;