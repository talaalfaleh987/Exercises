import { MaskPipe } from './pipes/mask-sens-pipe/mask-pipe';
import { Component, inject, signal } from '@angular/core';
import { StatusLabelPipe } from './pipes/statusLabel/status-label-pipe';
import { TodoTable } from './excer5/todo-table/todo-table';
import { TodoService } from './services/todo-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [TodoTable, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private todoService = inject(TodoService);
  todos$ = this.todoService.getTodos();
}
