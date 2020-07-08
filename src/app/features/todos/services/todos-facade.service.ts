import { initTodos, editTodo, insertTodo, updateTodo, postTodo } from './../../../redux/todos/todos.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { TodosServerService } from 'src/app/core/services/todos-server.service';
import { Todo } from 'src/app/core/model/todo.interface';

@Injectable()
export class TodosFacadeService {

  constructor(private todosServerService: TodosServerService, private router: Router,
    private store: Store) { }

  editTodo(todo: Todo) {
    this.store.dispatch(updateTodo({todo}));
  }

  addTodo(todo: Todo) {
    // this.store.dispatch(postTodo({todo}));
    this.todosServerService.insertTodo(todo).subscribe((item: Todo) => {
      this.store.dispatch(insertTodo({todo: item}));
      this.goToTodosHome();
    });
  }

  goToTodosHome() {
    this.router.navigateByUrl('/todos');
  }

  goToDetail(id: number) {
    this.router.navigateByUrl('/todos/detail/' + id);
  }
  
  goToEdit(id: number) {
    this.router.navigateByUrl('/todos/edit/' + id);
  }

}
