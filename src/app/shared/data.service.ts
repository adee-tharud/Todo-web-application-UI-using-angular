import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dashboard:Todo[] =[
    new Todo('this is a test!', false),
    new Todo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut odit laboriosam tempora. Nihil minima inventore sapiente alias assumenda labore qui laborum repellat reiciendis aperiam numquam, dolore ipsum dicta molestiae deserunt.', true)
  ]

  constructor() { }

  getAllTodos() {
    return this.dashboard
  }
  addTodo(todo: Todo) {
    this.dashboard.push(todo)
  }
  updateTodo(index: number, updateTodo: Todo) {
    this.dashboard[index] = updateTodo
  }
  deleteTodo(index: number){
    this.dashboard.splice(index, 1)
  }
}
