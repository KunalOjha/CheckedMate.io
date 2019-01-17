import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { MaterialsModule } from '../materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { TodoFormComponent } from './containers/todo-form/todo-form.component';
import { KPIComponent } from './components/kpi/kpi.component';
import { KpiPieChartComponent } from './components/kpi-pie-chart/kpi-pie-chart.component';
import { KpiLineChartComponent } from './components/kpi-line-chart/kpi-line-chart.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    MaterialsModule,
    ChartModule,
    DropdownModule
  ],
  declarations: [
    NavbarComponent,
    DashboardComponent, 
    TodoFormComponent, 
    KPIComponent, 
    KpiPieChartComponent, 
    KpiLineChartComponent
  ],
  entryComponents:[TodoFormComponent]
})
export class DashboardModule { }
