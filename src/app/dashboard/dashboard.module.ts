import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartModule} from 'primeng/chart';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { TodoFormComponent } from './containers/todo-form/todo-form.component';
import { KPIComponent } from './containers/kpi/kpi.component';
import { KpiPieChartComponent } from './components/kpi-pie-chart/kpi-pie-chart.component';
import { KpiLineChartComponent } from './components/kpi-line-chart/kpi-line-chart.component'
import { MaterialsModule } from '../materials/materials.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    ChartModule,
    DropdownModule
  ],
  declarations: [DashboardComponent, TodoFormComponent, KPIComponent, KpiPieChartComponent, KpiLineChartComponent],
  entryComponents:[TodoFormComponent]
})
export class DashboardModule { }
