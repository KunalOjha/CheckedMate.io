import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.css']
})
export class LoginPortalComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmitLogin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
   
    this.auth.loginUser(email, password);

    this.router.navigate(['/dashboard']);
  }

}
