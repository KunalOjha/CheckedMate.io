import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'signup-portal',
  templateUrl: './signup-portal.component.html',
  styleUrls: ['./signup-portal.component.css']
})
export class SignupPortalComponent implements OnInit {

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  onSubmitSignUp(form: NgForm) {
    this.auth.signupUser(form.value)

    this.router.navigate(['/dashboard']);
  }

}
