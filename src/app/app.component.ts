import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Checklist App';
  private apiKey = 'AIzaSyBqIaTOhrvZHzEkzJVYxllHe8JcOkImaAw';
  private authDomain = 'checkthis-io.firebaseapp.com'

  ngOnInit() {
    firebase.initializeApp({
      apiKey: this.apiKey,
      authDomain: this.authDomain,
    })
  }

}
