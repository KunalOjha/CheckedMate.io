import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  onLoginPage: boolean = true;

  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url === '/login') return this.onLoginPage = true;
      else return this.onLoginPage = false;
  }



}
