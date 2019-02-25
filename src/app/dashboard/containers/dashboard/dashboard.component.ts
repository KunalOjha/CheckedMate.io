import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store/reducers';
import { Subscription } from 'rxjs';
import * as fromTasksSummary from '../../../store/reducers/tasksSummary.reducer';
import { shareReplay } from 'rxjs/operators';
import { RequestUserTasks } from '../../../store/actions/tasks.actions';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cities = [
    {label:'Summary', value:{id:1, name: 'New York', code: 'NY'}},
    {label:'Due', value:{id:2, name: 'Rome', code: 'RM'}},
    {label:'Upcoming', value:{id:3, name: 'London', code: 'LDN'}},
    {label:'Completed', value:{id:4, name: 'Istanbul', code: 'IST'}},
];
  closeResult: string;

  userKpiData: fromTasksSummary.State;
  tasksSummary$: Subscription;
  user;
  tasks;

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.dispatch(new RequestUserTasks());
    this.user = this.store.select('user');
    this.tasks = this.store.select('taskList');
    this.tasksSummary$ = this.store.select('tasksSummary').pipe(
        shareReplay()
      ).subscribe( data => {
        this.userKpiData = data
      })
    }

}
