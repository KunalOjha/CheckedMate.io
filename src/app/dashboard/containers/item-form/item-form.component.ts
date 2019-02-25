import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { TasksService } from '../../../shared/tasks.service';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  categories = [
    'Personal',
    'Work',
    'Lifestyle'
  ];
  
  itemForm: FormGroup = this.formBuilder.group({
    dueDate: ['', Validators.required],
    category : ['', Validators.required],
    title: ['', Validators.required],
    description: ['', Validators.required]
  })
  
  constructor(
    private dialog: MatDialog ,
    private formBuilder : FormBuilder, 
    private itemStorageService: TasksService
    ) {}

  ngOnInit() {
  }

  onAddTask() {
    if (this.itemForm.dirty && this.itemForm.valid) {
      const item = this.itemForm.value;
      this.itemStorageService.storeTask(item)
        .subscribe({error: (err) => console.log(err)})

      this.dialog.closeAll();
    }
  }

  onCancelTask() {
    this.dialog.closeAll();
  }
}
