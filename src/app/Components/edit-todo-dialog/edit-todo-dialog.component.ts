import { Component, Inject, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.css']
})
export class EditTodoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public todo: Todo) { }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close()
  }

  onFormSubmit(form:NgForm) {
    
    if (form.invalid) return 
      
   
    const updateTodo = {
      ...this.todo,
      ...form.value
    }

    this.dialogRef.close(updateTodo)
  }

}
