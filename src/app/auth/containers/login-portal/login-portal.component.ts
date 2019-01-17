import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/reducers/';
import { Login } from '../../../auth/actions/auth.actions';

@Component({
  selector: 'login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.css']
})
export class LoginPortalComponent implements OnInit {

  constructor(private router: Router, private store: Store<fromStore.IAppState>) { }

  ngOnInit() {
  }

  onSubmitCredentials() {
    this.router.navigate(['/dashboard']);
    this.store.dispatch(new Login())
  }

}
