import { TodosFacadeService } from './../../services/todos-facade.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Todo } from 'src/app/core/model/todo.interface';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { getTodoById } from 'src/app/redux';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  todo: Todo;

  constructor(private todosFacadeService: TodosFacadeService, private route: ActivatedRoute, private store: Store) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params != null && params['id'] != null) {
        this.store.pipe(select(getTodoById, { id: Number(params['id']) })).subscribe(todo => {
          this.todo = todo;
        });
      }
    });
  }

  editForm(todo: Todo) {
    this.todosFacadeService.editTodo(todo);
  }

  undo(todo: Todo) {
    this.todosFacadeService.goToDetail(todo.id);
  }

}
