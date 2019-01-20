import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from './store/reducers';
import { CheckLogin } from './auth/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Checklist-App';

  constructor(private store: Store<fromStore.IAppState>) {

  }

  ngOnInit() {
    this.store.dispatch(new CheckLogin());
  }
}
