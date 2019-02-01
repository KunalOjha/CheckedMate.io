import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { IAppState } from '../../../store/reducers';
import { Store } from '@ngrx/store';
import { loginUser } from '../../../store/actions/user.actions';

@Component({
  selector: 'login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.css']
})
export class LoginPortalComponent implements OnInit {

  constructor(private store: Store<IAppState>, private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmitLogin(form: NgForm) {
    const { email, password } = form.value;
    this.store.dispatch(new loginUser({email, password}))
  }

}
