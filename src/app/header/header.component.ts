import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ItemFormComponent } from '../dashboard/containers/item-form/item-form.component';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() { }
    
  openDialog() {
    this.dialog.open(ItemFormComponent, {
      width: '30%',
      panelClass: 'item-dialog'
    })
  }

}
