import { Component, OnInit, Input, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'kpi-pie-chart',
  templateUrl: './kpi-pie-chart.component.html',
  styleUrls: ['./kpi-pie-chart.component.css']
})
export class KpiPieChartComponent implements OnInit, OnChanges {
    @Input() taskCount;
    labels: string[] = ['Due','Upcoming','Completed'];
    backgroundColor = ["#FF0000", "#36A2EB", "#228b22"];
    changedData: { labels: string[]; datasets: { data: number[]; backgroundColor: string[]; hoverBackgroundColor: string[]; }[]; };
    
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
                data: [0, 0, 1],
                backgroundColor: this.backgroundColor,
                hoverBackgroundColor: this.backgroundColor
            }]    
        };
    
    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges){
        if (changes['taskCount'].currentValue !== changes['taskCount'].previousValue) {
            
            const userKpiData = changes['taskCount'].currentValue;
            this.data.datasets[0].data = [userKpiData.pastDue, userKpiData.upcoming, userKpiData.completed];

            this.data = Object.assign(
                {}, 
                this.data, 
                this.data.datasets[0].data = [userKpiData.pastDue, userKpiData.upcoming, userKpiData.completed]
                );
        }
    }
}
