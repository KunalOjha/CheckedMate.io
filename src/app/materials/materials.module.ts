import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSidenavModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatDatepickerModule
  ]
})
export class MaterialsModule { }
