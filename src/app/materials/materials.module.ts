import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSidenavModule, MatDatepickerModule, MatNativeDateModule, MatDialogModule, MatSelectModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatSelectModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSelectModule
  ]
})
export class MaterialsModule { }
