import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store/reducers';
import { Subscription } from 'rxjs';
import * as fromTasksList from '../../../store/reducers/tasks.reducer';
import { shareReplay } from 'rxjs/operators';
import { RequestUserTasks } from '../../../store/actions/tasks.actions';
import { Task } from 'models.ts/task';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  taskCount : {"completed": number, "pastDue": number, "upcoming": number}
  cities = [
    {label:'Summary', value:{id:1, name: 'New York', code: 'NY'}},
    {label:'Due', value:{id:2, name: 'Rome', code: 'RM'}},
    {label:'Upcoming', value:{id:3, name: 'London', code: 'LDN'}},
    {label:'Completed', value:{id:4, name: 'Istanbul', code: 'IST'}},
];
  closeResult: string;

 
  tasksSummary$: Subscription;

  constructor(private store: Store<IAppState>) {}

  ngOnInit() {
    this.store.dispatch(new RequestUserTasks());
    this.tasksSummary$ = this.store.select('taskList').pipe(
        shareReplay()
      ).subscribe( data => {
        this.taskCount = {
          "completed" : data.completed.length, 
          "pastDue" :data.pastDue.length, 
          "upcoming" : data.upcoming.length
        };
      })
    }

}
