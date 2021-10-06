import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/shared/data.service';
import { Todo } from 'src/app/shared/todo.model';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboard :Todo[]
  showValidationErrors :boolean

  

   
 constructor(private dataService: DataService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dashboard = this.dataService.getAllTodos()
  }

  onFormSubmit(form:NgForm){
    console.log('FORM SUBMITED')
    console.log(form)

    if(form.invalid) return alert("Form is Invalid")

    this.dataService.addTodo(new Todo(form.value.text))

    form.reset()
    }

    toggleCompleted(todo: Todo){

      todo.completed = !todo.completed;
    }
    editTodo(todo: Todo) {

      const index = this.dashboard.indexOf(todo)

      let dialogRef = this.dialog.open(EditTodoDialogComponent, {
        
        width: '700px',
        data: todo
      });

      dialogRef.afterClosed().subscribe((result) =>{
        if(result) {
          this.dataService.updateTodo(index, result)
        }
      })
    }

    deleteTodo(todo:Todo){
      const index = this.dashboard.indexOf(todo)
      this.dataService.deleteTodo(index)
    }
  }

  

