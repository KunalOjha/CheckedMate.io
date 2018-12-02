import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSidenavModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatSidenavModule
  ]
})
export class MaterialsModule { }
