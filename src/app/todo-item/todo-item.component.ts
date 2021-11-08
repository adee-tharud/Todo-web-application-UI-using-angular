import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Todo } from '../shared/todo.model';

// import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

// import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  @Input() todo: Todo
  @Output() todoClicked: EventEmitter<void> = new EventEmitter()
  @Output() editClicked: EventEmitter<void> = new EventEmitter()
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter()

  // drop(event: CdkDragDrop<string[]>){
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   }else{
  //     transferArrayItem(event.previousContainer.data,
  //      event.container.data,
  //      event.previousIndex,
  //      event.currentIndex);
  //   }
  // }

  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.todos, event.previousIndex, event.currentIndex);
  // }
  constructor() { }

  ngOnInit(): void {
  }

  onTodoClicked() {

    this.todoClicked.emit()
  }
  onEditClicked(){
    this.editClicked.emit()
  }
  onDeleteClicked(){
    this.deleteClicked.emit()
  }
}
