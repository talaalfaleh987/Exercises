import { Component, input } from '@angular/core';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-table',
  imports: [],
  templateUrl: './todo-table.html',
})
export class TodoTable {
  todos = input<Todo[]>([]);
}
