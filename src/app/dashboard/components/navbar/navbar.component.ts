import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TodoFormComponent } from '../../containers/todo-form/todo-form.component';
import * as fromStore from  '../../../store/reducers';
import { Store } from '@ngrx/store';
import { Logout } from '../../../auth/actions/auth.actions';

@Component({
  selector: 'navigation-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private store: Store<fromStore.IAppState> , private dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog() {
    this.dialog.open(TodoFormComponent, {
      width: '30%',
      panelClass: 'todo-dialog'
    })
  }

  logout() {
    this.store.dispatch(new Logout())
  }

}
