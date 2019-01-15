import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'kpi-pie-chart',
  templateUrl: './kpi-pie-chart.component.html',
  styleUrls: ['./kpi-pie-chart.component.css']
})
export class KpiPieChartComponent implements OnInit, OnChanges {
    @Input() kpiData;
    completed: number;
    due: number;
    upcoming: number;
    
    constructor(private cd: ChangeDetectorRef) { }

    chartOptions = {
        legend: {
            labels: {
                fontColor: 'lightcyan'
            }
        }
    };
    data = {
        labels: ['Due','Upcoming','Completed'],
        datasets: [
            {
                data: [this.due, this.upcoming, this.completed],
                backgroundColor: [
                    "#FF0000",
                    "#36A2EB",
                    "#228b22"
                ],
                hoverBackgroundColor: [
                    "#FF0000",
                    "#36A2EB",
                    "#228b22"
                ]
            }]    
        };
    
    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges){
        if (changes['kpiData'].currentValue !== changes['kpiData'].previousValue) {
            const userKpiData = changes['kpiData'].currentValue['count'];
            console.log(userKpiData);

            this.completed = userKpiData.completed;
            this.due = userKpiData.due;
            this.upcoming = userKpiData.upcoming

            //this.chart.refresh();
            
        }
    }
}
