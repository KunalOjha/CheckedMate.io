import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store} from '@ngrx/store';
import { IAppState } from '../../../store/reducers';

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css']
})
export class KPIComponent implements OnInit, OnChanges {
  @Input() taskCount = {
    completed: 0,
    pastDue: 0,
    upcoming: 0
  };

  constructor(private store : Store<IAppState>) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['taskCount'].currentValue !== changes['taskCount'].previousValue) {

      this.taskCount = changes['taskCount'].currentValue;
    }
  }

}
