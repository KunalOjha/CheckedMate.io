import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ItemFormComponent } from '../item-form/item-form.component';
import { Store } from '@ngrx/store';
import { IAppState } from '../../../store/reducers';
import { Observable, Subscription } from 'rxjs';
import * as fromTasksSummary from '../../../store/reducers/tasksSummary-reducer';
import { shareReplay } from 'rxjs/operators';


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

  userTasksData: fromTasksSummary.State;
  tasksSummary$: Subscription;

  constructor(private store: Store<IAppState>, private dialog: MatDialog) {}
  
  openDialog() {
    this.dialog.open(ItemFormComponent, {
      width: '30%',
      panelClass: 'item-dialog'
    })
  }

  ngOnInit() {
   this.tasksSummary$ = this.store.select('tasksSummary').pipe(
      shareReplay()
    ).subscribe( data => {
      this.userTasksData = data
    })
  }

}
