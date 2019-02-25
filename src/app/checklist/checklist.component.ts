import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/reducers';
import * as fromTasks from '../store/reducers/tasks.reducer 2';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {
  tasklist$;
  constructor(private store: Store<fromTasks.State>) { }

  ngOnInit() {
    this.tasklist$ = this.store.select('taskList')
  }

}
