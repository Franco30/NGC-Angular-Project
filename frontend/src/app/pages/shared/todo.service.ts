import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  selectedTodo: Todo;
  todo: Todo[];
readonly baseURL = 'http://localhost:4000/todo';

  constructor(private http: HttpClient) { }

  postTodo(todo : Todo){
    return this.http.post(this.baseURL, todo);
  }

  getTodoList() {
    return this.http.get(this.baseURL);
  }

  putTodo(todo: Todo) {
    return this.http.put(this.baseURL + `/${todo._id}`, todo);
  }

  deleteTodo(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
