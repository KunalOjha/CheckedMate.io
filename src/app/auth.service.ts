import { Injectable } from '@angular/core';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';

(window as any).global = window;

@Injectable({providedIn: 'root'})
export class AuthService {

  auth0 = new auth0.WebAuth({
    clientID: 'KSe06QDuwYMlR5RYgbKfIO2eRzii0XPv',
    domain: 'travellist.auth0.com',
    responseType: 'token id_token',
    redirectUri: 'http://localhost:3000/callback',
    scope: 'openid'
  });

  constructor() {}

  login(): void {
    this.auth0.authorize();
  }

}