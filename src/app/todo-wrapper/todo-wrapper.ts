import { Component } from '@angular/core';
import { TodoForm } from "../todo-form/todo-form";
import { TodoList } from "../todo-list/todo-list";

@Component({
  selector: 'app-todo-wrapper',
  imports: [TodoForm, TodoList],
  templateUrl: './todo-wrapper.html',
  styleUrl: './todo-wrapper.scss'
})
export class TodoWrapper {
tasks: {id: number, text: string, completed: boolean}[] = [];

  addTask(taskText: string) {
    this.tasks.push({
      id: Date.now(),
      text: taskText,
      completed: false
    });
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  toggleComplete(id: number) {
    this.tasks = this.tasks.map(task => 
      task.id === id ? {...task, completed: !task.completed} : task
    );
  }
}