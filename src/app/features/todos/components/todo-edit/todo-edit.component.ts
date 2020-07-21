import { TodosFacadeService } from './../../services/todos-facade.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Todo } from 'src/app/core/model/todo.interface';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, switchMap } from 'rxjs/operators';
import { getTodoById } from 'src/app/redux/todos';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent {
  private subscription: Subscription = new Subscription();
  get todo(): Observable<Todo>{
    return this.store.pipe(select(getTodoById));
  }

  constructor(private todosFacadeService: TodosFacadeService, private route: ActivatedRoute, private store: Store) {
  }

  editForm(todo: Todo) {
    this.todosFacadeService.editTodo(todo);
  }

  undo(todo: Todo) {
    this.todosFacadeService.goToDetail(todo.id);
  }

}
