import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksService } from './tasks.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [TasksService]
})
export class SharedModule { }
