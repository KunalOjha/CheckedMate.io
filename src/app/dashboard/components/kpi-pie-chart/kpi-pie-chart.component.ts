import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'kpi-pie-chart',
  templateUrl: './kpi-pie-chart.component.html',
  styleUrls: ['./kpi-pie-chart.component.css']
})
export class KpiPieChartComponent implements OnInit, OnChanges {
    @Input() kpiData;
    labels: string[] = ['Due','Upcoming','Completed'];
    backgroundColor = ["#FF0000", "#36A2EB", "#228b22"];
    
    constructor(private cd: ChangeDetectorRef) { }

    chartOptions = {
        legend: {
            labels: {
                fontColor: 'lightcyan'
            }
        }
    };
    data = {
        labels: this.labels,
        datasets: [
            {
                data: [0, 0, 0],
                backgroundColor: this.backgroundColor,
                hoverBackgroundColor: this.backgroundColor
            }]    
        };
    
    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges){
        if (changes['kpiData'].currentValue !== changes['kpiData'].previousValue) {
            
            const userKpiData = changes['kpiData'].currentValue['count'];
            this.data.datasets[0].data = [userKpiData.due, userKpiData.upcoming, userKpiData.completed];
        }
    }
}
