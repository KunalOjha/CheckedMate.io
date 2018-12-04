import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import { TodoFormComponent } from './containers/todo-form/todo-form.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name;
  animal;
  cities = [
    {label:'Select City', value:null},
    {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
    {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
    {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
    {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
    {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
];
  closeResult: string;

  constructor(private dialog: MatDialog) {}
  
  openDialog() {
    this.dialog.open(TodoFormComponent, {
      width: '30%',
      panelClass: 'todo-dialog'
    })
  }

  ngOnInit() {
  }

}
