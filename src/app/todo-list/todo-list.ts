import { Component , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  imports: [],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss'
})
export class TodoList {
@Input() tasks: any[] = [];
  @Output() deleteTask = new EventEmitter<number>();
  @Output() toggleComplete = new EventEmitter<number>();
}
