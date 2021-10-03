import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/shared/data.service';
import { Todo } from 'src/app/shared/todo.model';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  dashboard :Todo[]

  
// list:any[]=[];

// addTask(item:string) {
//  this.list.push({id:this.list.length,name:item});
// }


// removeTask(id:number) {
// this.list=this.list.filter(item=>item.id!==id);
// }
  
   
 constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dashboard = this.dataService.getAllTodos()
  }

  onFormSubmit(form:NgForm){
    if(form.invalid) return alert("form is invalid")

    this.dataService.addTodo(new Todo(form.value.text))

    form.reset()
    }

    toggleCompleted(todo: Todo){

      todo.completed = !todo.completed;
    }
    editTodo(todo: Todo) {

      const index = this.dashboard.indexOf(todo)






      // this.dataService.updateTodo()
    }
  }

  

