import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnDestroy {

  todos: Todo[] = [];

  storageListenSub: Subscription;

  constructor() {
    this.loadState();

    this.storageListenSub = fromEvent<StorageEvent>(window, 'storage').subscribe((event: StorageEvent ) => {
      if (event.key === 'todos') this.loadState();

      console.log("event fired")
      console.log(event)
    })
  }

  ngOnDestroy(): void {
    if (this.storageListenSub) this.storageListenSub.unsubscribe()
  }

  getTodos(){
    return this.todos
  }

  getTodo(id: string){
    return this.todos.find(t => t.id === id)
  }

  addTodo(todo: Todo){
    this.todos.push(todo);
    this.saveState()
  }

  updateTodo(id: string, updateTodoFields: Partial<Todo>){
    const todo = this.getTodo(id);
    Object.assign(todo!, updateTodoFields)
    this.saveState()
  }
    
  deleteTodo(id: string){
    const todoIndex = this.todos.findIndex(t => t.id === id);
    if(todoIndex == -1) return

    this.todos.splice(todoIndex, 1)
    this.saveState()
  }

  saveState(){
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }

  loadState(){
    try {
      const todosInStorage = JSON.parse(localStorage.getItem('todos')!);
      this.todos.length = 0 //clear the notes array (whyle keeping the reference)
      this.todos.push(...todosInStorage)
    } catch (e) {
      console.log('There was an error retrieving the todos from localStorage')
      console.log(e)
    }
  }
}
