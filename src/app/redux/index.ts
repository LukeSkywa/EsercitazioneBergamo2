import { UsersState } from './users/users.reducers';
import { TodoState } from './todos/todos.reducers';
import { createSelector } from '@ngrx/store';

export interface AppState {
    todoState: TodoState;
    usersState: UsersState;
}