import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { switchMap, take, tap, map, catchError } from "rxjs/operators";
import { CREATE_USER, LOGIN_USER, createUser, createUserSuccess, createUserError, loginUser, loginUserSuccess } from '../actions/user.actions'
import { AuthService } from "../../auth/auth.service";
import { AngularFireDatabase } from "@angular/fire/database";

@Injectable()
export class UserEffects {
    
    @Effect()
    authNewUser$ = this.actions$.pipe(
        ofType(CREATE_USER),
        switchMap((action: createUser) => {
            const userData = action.payload;
            return this.authService.signupUser(userData).pipe(
                map(userData => new createUserSuccess({
                    'firstName': action.payload.firstname,
                    'lastName' : action.payload.lastname
                    }),
                )
            );
        })
    )
    getAllPosts() {
        return this.db
          .list('/posts')
          .snapshotChanges()
          .map(actions => {
            return actions.map(a => {
              const data = a.payload.val();
              const id = a.payload.key;
              return { id, ...data };
            });
          });
      }

    @Effect()
    loginUser$ = this.actions$.pipe(
        ofType(LOGIN_USER),
        switchMap((action: loginUser) => {
            return this.authService.loginUser(action.payload.email, action.payload.password).pipe(
                map(userData => new loginUserSuccess()))
        })
    )
    
    constructor(private actions$: Actions, private authService: AuthService, private af: AngularFireDatabase) {}
}
