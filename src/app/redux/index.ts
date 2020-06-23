import { TodoState } from './todos/todos.reducers';
import { createSelector } from '@ngrx/store';

export interface AppState {
    todos: TodoState;
}

export const selectTodosState = (state: AppState) => state.todos;

export const selectTodos = createSelector(
    selectTodosState,
    (state: TodoState) => state.todos
);