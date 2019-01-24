import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {UserCredential} from '@firebase/auth-types';
import { UserData } from '../../models.ts/signup.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signupUser(userData: UserData) { 
    firebase.auth().createUserWithEmailAndPassword(userData.email, userData.password)
    .then(function(user) {
      return user.user.updateProfile(
        {
          'displayName' : userData.firstname + '' + userData.lastname,
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
