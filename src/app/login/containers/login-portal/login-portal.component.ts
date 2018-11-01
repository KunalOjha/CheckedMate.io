import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login-portal',
  templateUrl: './login-portal.component.html',
  styleUrls: ['./login-portal.component.css']
})
export class LoginPortalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmitCredentials() {
    this.router.navigate(['/dashboard']);
  }

}
