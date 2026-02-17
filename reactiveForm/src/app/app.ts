import { Component, inject, signal } from '@angular/core';
import { Toggle } from './excer3/toggle/toggle';
import { Card } from './excer4/card/card';
import { TodoTable } from './excer5/todo-table/todo-table';
import { TodoService } from './services/todo-service';
import { AsyncPipe } from '@angular/common';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
imports: [Toggle,Card, TodoTable,AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  text: string = 'Enable';
  showToast = signal(false);
  toastMessage = signal('');
  showAlert = signal(false);
  alertMessage = signal('');

  onToggleText(value: boolean) {
    if (!value) {
      this.text = 'Enable';
    } else {
      this.text = 'Disable';
    }
  }
  showNotifications(value: boolean) {
    this.toastMessage.set(value ? 'Notifications Enabled' : 'Notifications Disabled');
    this.showToast.set(true);
    setTimeout(() => {
      this.showToast.set(false);
    }, 2000);
  }

  showConfirmation(value: boolean) {
    console.log('New value:', value);
    this.alertMessage.set(value ? 'Deleted Successfully' : 'Deleted Disabled');
    this.showAlert.set(true);
    setTimeout(() => {
      this.showAlert.set(false);
    }, 2000);
  }
  private todoService = inject(TodoService);
  errorMsg: string = '';
  todos$: Observable<Todo[]> = this.todoService.getTodos().pipe(
    map((todoList: Todo[]) =>
      todoList.map((element: Todo) => {
        return { ...element, completed: element.completed ? 'Yes' : 'No' };
      }),
    ),
    catchError((error) => {
      this.errorMsg = error.message;
      return EMPTY;
    }),
  );
}
