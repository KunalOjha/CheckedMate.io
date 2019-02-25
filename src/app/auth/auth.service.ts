import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {UserCredential} from '@firebase/auth-types';
import { NewUser } from 'models.ts/user.model';
import { from, Observable, throwError } from 'rxjs';
import { switchMap, tap, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  signupUser(user: NewUser) { 
    return from(firebase.auth().createUserWithEmailAndPassword(user.email, user.password)).pipe(
      tap(userData => {
        sessionStorage.setItem('uid', userData.user.uid);

        userData.user.updateProfile({'displayName' : user.firstname + '' + user.lastname, 'photoURL' : ''})

        this.router.navigate(['/dashboard']);
      }),
    )
  }

  loginUser(email: string, password: string) {
    return from(firebase.auth().signInWithEmailAndPassword(email, password)).pipe(
      tap(userData => {
        console.log('userdata from loginuser call', userData);

        sessionStorage.setItem('uid', userData.user.uid);

        this.router.navigate(['/dashboard']);
      }
    )
    )}
}
