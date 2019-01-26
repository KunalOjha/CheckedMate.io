import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'primeng/chart';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialsModule } from '../materials/materials.module';
import { ItemFormComponent } from './containers/item-form/item-form.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { KPIComponent } from './components/kpi/kpi.component';
import { KpiPieChartComponent } from './components/kpi-pie-chart/kpi-pie-chart.component';
import { KpiLineChartComponent } from './components/kpi-line-chart/kpi-line-chart.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialsModule,
    ChartModule,
    DropdownModule
  ],
  declarations: [ItemFormComponent, DashboardComponent, KPIComponent, KpiPieChartComponent, KpiLineChartComponent],
  entryComponents:[ItemFormComponent]
})
export class DashboardModule { }
