import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  standalone: true,
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.scss'
})
export class TodoForm {
@Output() addTask = new EventEmitter<string>();
  taskText = '';

  onSubmit() {
    if (this.taskText.trim()) {
      this.addTask.emit(this.taskText);
      this.taskText = '';
    }
  }



}


