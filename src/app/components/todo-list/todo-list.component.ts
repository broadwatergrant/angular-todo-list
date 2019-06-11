import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {

   this.todoService.getAllTodos().subscribe( todos => {
    this.todos = todos;
   } );

  }

}
