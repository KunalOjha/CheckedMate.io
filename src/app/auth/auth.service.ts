import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {UserCredential} from '@firebase/auth-types';
import { NewUser } from 'models.ts/user.model';
import { from, Observable } from 'rxjs';
import { switchMap, tap, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signupUser(user: NewUser) { 
    return from(firebase.auth().createUserWithEmailAndPassword(user.email, user.password)).pipe(
      tap(userData => {
        sessionStorage.setItem('uid', userData.user.uid);

        userData.user.updateProfile({'displayName' : user.firstname + '' + user.lastname, 'photoURL' : ''})
      }),
    )
  }

  loginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => console.log(response))
      .catch(error => console.log(error))

  }
}
