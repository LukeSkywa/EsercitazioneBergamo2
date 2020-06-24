import { getTodoById } from './../../../../redux/index';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { TodosFacadeService } from '../../services/todos-facade.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/model/todo.interface';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss']
})
export class TodoDetailComponent implements OnInit {

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

  edit(todo: Todo) {
    this.todosFacadeService.goToEdit(todo.id);
  }

}
