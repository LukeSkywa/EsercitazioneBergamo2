import { initTodos, editTodo, insertTodo } from './../../../redux/todos/todos.actions';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { TodosServerService } from 'src/app/core/services/todos-server.service';
import { Todo } from 'src/app/core/model/todo.interface';

@Injectable()
export class TodosFacadeService {

  constructor(private todosServerService: TodosServerService, private router: Router,
    private store: Store) { }

  getAllTodos() {
    this.todosServerService.retrieveAllTodos().subscribe(todos => {
      this.store.dispatch(initTodos({todos}));
    });
  }

  editTodo(todo: Todo) {
    this.todosServerService.updateTodo(todo).subscribe((item: Todo) => {
      this.store.dispatch(editTodo({todo: item}));
      this.goToDetail(todo.id);
    });
  }

  addTodo(todo: Todo) {
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
