import { getCurrentUser } from './../../../../redux/index';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/core/model/todo.interface';
import { getFirstTodo } from 'src/app/redux';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get todo(): Observable<Todo>{
    return this.store.pipe(select(getFirstTodo));
  }

  get user(): Observable<string> {
    return this.store.pipe(
      select(getCurrentUser),
      filter(user => !!user),
      map(user => user.name)
    );
  }

  constructor(private store: Store) { 
  }

  ngOnInit(): void {
  }

}
