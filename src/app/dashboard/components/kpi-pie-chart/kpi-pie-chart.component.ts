import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kpi-pie-chart',
  templateUrl: './kpi-pie-chart.component.html',
  styleUrls: ['./kpi-pie-chart.component.css']
})
export class KpiPieChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
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
            data: [11, 50, 33],
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

}
