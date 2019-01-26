import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemStorageService } from './item-storage.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [],
  providers: [ItemStorageService]
})
export class SharedModule { }
