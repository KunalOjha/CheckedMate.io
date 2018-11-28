import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TodoFormComponent } from './containers/todo-form/todo-form.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [DashboardComponent, TodoFormComponent]
})
export class DashboardModule { }
