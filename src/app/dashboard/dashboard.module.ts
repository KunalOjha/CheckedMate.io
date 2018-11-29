import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TodoFormComponent } from './containers/todo-form/todo-form.component';
import { KPIComponent } from './containers/kpi/kpi.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [DashboardComponent, TodoFormComponent, KPIComponent]
})
export class DashboardModule { }
