import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap, take } from "rxjs/operators";
import { CREATE_USER, LOGIN_USER, createUser, createUserSuccess, createUserError } from '../actions/user.actions'
import { AuthService } from "../../auth/auth.service";

@Injectable()
export class UserEffects {
    
    @Effect()
    authUser$ = this.actions$.pipe(
        ofType(CREATE_USER),
        switchMap((action: createUser) => {
            alert('in effects');
            return this.authService.signupUser(action.payload);
        })
    ).subscribe(
        userData => new createUserSuccess(),
        error => new createUserError()
        )
    
    constructor(private actions$: Actions, private authService: AuthService) {}
}
