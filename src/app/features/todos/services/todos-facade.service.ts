import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { TodosServerService } from 'src/app/core/services/todos-server.service';
import { BehaviorSubject } from 'rxjs';
import { Todo } from 'src/app/core/model/todo.interface';
import { saveAllTodos } from 'src/app/redux/todos/todos.actions';

@Injectable()
export class TodosFacadeService {

  private todsSubject: BehaviorSubject<Todo[]> = new BehaviorSubject(null);
  tods$ = this.todsSubject.asObservable();

  private todSelectedSubject: BehaviorSubject<Todo> = new BehaviorSubject(null);
  todoSelected$ = this.todSelectedSubject.asObservable();

  constructor(private todosServerService: TodosServerService, private router: Router, private store: Store) { }

  getAllTodos() {

    this.todosServerService.retrieveAllTodos().subscribe(todos => {
      this.todsSubject.next(todos);
      this.store.dispatch(saveAllTodos({todos}));
    });
  }

  editTodo(todo: Todo) {
    this.todosServerService.updateTodo(todo).subscribe(() => {
      this.getAllTodos();
      this.goToDetail(todo.id);
    });
  }

  addTodo(todo: Todo) {
    this.todosServerService.insertTodo(todo).subscribe(() => {
      this.getAllTodos();
      this.goToTodosHome();
    });
  }

  getTodoById(id: number) {
    this.todosServerService.retrieveTodoById(id).subscribe(todo => {
      this.todSelectedSubject.next(todo);
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
