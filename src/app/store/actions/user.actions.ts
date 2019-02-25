import { Action } from '@ngrx/store';
import { NewUser, UserCredentials, UserLoginSuccess } from 'models.ts/user.model';

export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = 'CREATE_USER_ERROR';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR';

export class createUser implements Action {
    readonly type = CREATE_USER;
    
    constructor(readonly payload : NewUser) {}
}

export class loginUser implements Action {
    readonly type = LOGIN_USER;

    constructor(readonly payload : UserCredentials) {}
}

export class createUserSuccess implements Action {
    readonly type = CREATE_USER_SUCCESS;

    constructor(readonly payload: UserLoginSuccess) {}
}

export class createUserError implements Action {
    readonly type = CREATE_USER_ERROR;
}

export class loginUserSuccess implements Action {
    readonly type = LOGIN_USER_SUCCESS;

   // constructor(readonly payload: UserLoginSuccess) {}
}

export class loginUserError implements Action {
    readonly type = LOGIN_USER_ERROR;
}

export type userActions = 
createUser | 
createUserSuccess | 
createUserError |
loginUser |
loginUserSuccess | 
loginUserError;