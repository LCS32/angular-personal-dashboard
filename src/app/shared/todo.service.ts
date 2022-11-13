import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [
    new Todo('This is a test'),
    new Todo('This is a test2'),
    new Todo('This is a test3')
  ];
  todo: Todo[] = []

  constructor() {

   }

  getTodos(){
    return this.todos
  }

  getTodo(id: string){
    return this.todos.find(t => t.id === id)
  }

  addTodo(todo: Todo){
    this.todos.push(todo)
  }

  updateTodo(id: string, updateTodoFields: Partial<Todo>){
    const todo = this.getTodo(id);
    Object.assign(todo!, updateTodoFields)
  }
    
  deleteTodo(id: string){
    const todoIndex = this.todos.findIndex(t => t.id === id);
    if(todoIndex == -1) return

    this.todos.splice(todoIndex, 1)
  }
}
