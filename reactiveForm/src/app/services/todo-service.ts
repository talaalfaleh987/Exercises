import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private http = inject(HttpClient);
  private readonly url = 'https://jsonplaceholder.typicode.com/todos';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url).pipe(catchError(() => of([])));
  }
}
