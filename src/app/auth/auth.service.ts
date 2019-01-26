import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {UserCredential} from '@firebase/auth-types';
import { User } from '../../models.ts/signup.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signupUser(user: User) { 
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
    .then(function(userData) {
      sessionStorage.setItem('uid', userData.user.uid);
      return userData.user.updateProfile(
        {
          'displayName' : user.firstname + '' + user.lastname,
          'photoURL' : ''
        })
    })
      .catch(
        error => console.log(error)
      )
  }

  loginUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => console.log(response))
      .catch(error => console.log(error))

  }
}
