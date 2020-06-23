import { createAction, props } from '@ngrx/store';
import { Todo } from '../../core/model/todo.interface';

export const saveAllTodos = createAction('[Todos] save all', props<{todos: Todo[]}>());
export const saveTodo = createAction('[Todos] save one', props<{todo: Todo}>());