import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-logout-prompt',
  templateUrl: './logout-prompt.component.html',
  styleUrls: ['./logout-prompt.component.css']
})
export class LogoutPromptComponent implements OnInit {

  constructor(private ref: MatDialogRef<LogoutPromptComponent>) {}


  ngOnInit() {
  }

  cancel() {
    this.ref.close(false);
  }

  confirm() {
    this.ref.close(true);
  }

}
