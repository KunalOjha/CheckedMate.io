import { Injectable } from '@angular/core';
import { bindNodeCallback } from 'rxjs';
import * as auth0 from 'auth0-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _Auth0 = new auth0.WebAuth({
    clientID: environment.auth.clientID,
    domain: environment.auth.domain,
    responseType: 'token',
    redirectUri: environment.auth.redirect,
    scope: environment.auth.scope
  });
  // Track whether or not to renew token
  private _authFlag = 'isLoggedIn';
  // Authentication navigation
  private _onAuthSuccessUrl = '/home';
  private _onAuthFailureUrl = '/login';
  private _logoutUrl = 'http://localhost:4200';
  private _expiresAt: number;

  constructor() { }
}
