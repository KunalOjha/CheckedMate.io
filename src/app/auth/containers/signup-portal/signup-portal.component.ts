import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { IAppState } from '../../../store/reducers';
import { Store } from '@ngrx/store';
import { createUser } from '../../../store/actions/user.actions';

@Component({
  selector: 'signup-portal',
  templateUrl: './signup-portal.component.html',
  styleUrls: ['./signup-portal.component.css']
})
export class SignupPortalComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService, private store: Store<IAppState>) { }

  ngOnInit() {
  }

  onSubmitSignUp(form: NgForm) {
    this.store.dispatch(new createUser(form.value))
  }

}
