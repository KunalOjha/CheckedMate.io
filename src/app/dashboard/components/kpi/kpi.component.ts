import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store} from '@ngrx/store';
import { IAppState } from '../../../store/reducers';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css']
})
export class KPIComponent implements OnInit, OnChanges {
  taskSummary$;

  @Input() kpiData;

  constructor(private store : Store<IAppState>) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['kpiData'].currentValue !== changes['kpiData'].previousValue) {

      this.kpiData = changes['kpiData'].currentValue.count;
    }
  }

}
