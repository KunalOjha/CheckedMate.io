import { Component, OnInit } from '@angular/core';
import * as fromStore from '../../../store/reducers';
import { Store } from '@ngrx/store';
import { LoginComplete } from '../../actions/auth.actions';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private store: Store<fromStore.IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoginComplete());
  }

}
