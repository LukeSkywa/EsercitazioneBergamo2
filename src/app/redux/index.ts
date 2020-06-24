import { TodoState } from './todos/todos.reducers';
import { createSelector } from '@ngrx/store';

export interface AppState {
    todoState: TodoState;
}

export const selectTodosState = (state: AppState) => state.todoState;

export const selectTodos = createSelector(
    selectTodosState,
    (state: TodoState) => state.todos
);