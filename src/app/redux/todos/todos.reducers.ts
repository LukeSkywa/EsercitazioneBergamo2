import { Action, createReducer, on } from '@ngrx/store';
import { saveAllTodos, saveTodo } from './todos.actions';
import { Todo } from '../../core/model/todo.interface';

export interface TodoState {
    todos: Todo[];
}

export const initialState: TodoState = {
    todos: []
};

const todoReducer = createReducer(
    initialState,
    on(saveAllTodos, (state, {todos}) => ({ ...state, todos: todos })),
    on(saveTodo, (state, {todo}) => {
        if(state.todos.some(item => item.id === todo.id)){
            return ({ ...state, todos: state.todos.map(item => item.id === todo.id ? todo : item) });
        }else{
            return ({ ...state, todos: [...state.todos, todo] });
        }
    }),
);

export function reducer(state: TodoState | undefined, action: Action) {
    return todoReducer(state, action);
}