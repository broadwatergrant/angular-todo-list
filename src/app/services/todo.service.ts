import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todosURL: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getAllTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>( `${this.todosURL}?_limit=5` );
  }
}
