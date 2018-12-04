import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  categories = [
    'Personal',
    'Work',
    'Lifestyle'
  ];
  
  todoForm: FormGroup = this.fb.group({
    dueDate: '',
    category : '',
    title: '',
    description: ''
  })
  
  constructor(private dialog: MatDialog ,private fb : FormBuilder) { }

  ngOnInit() {
  }

  onAddItem() {
    this.dialog.closeAll();
  }

  onCancelItem() {
    this.dialog.closeAll();
  }
}
