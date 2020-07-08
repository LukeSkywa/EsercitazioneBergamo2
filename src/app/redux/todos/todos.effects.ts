import { HttpCommunicationsService } from './../../core/http-communications/http-communications.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { retrieveAllTodos, initTodos } from './todos.actions';
import { switchMap, map } from 'rxjs/operators';
import { Todo } from 'src/app/core/model/todo.interface';

@Injectable()
export class TodosEffects {

    retrieveAllTodos$ = createEffect(() => this.actions$.pipe(
        ofType(retrieveAllTodos),
        switchMap(() => this.httpCommunicationsService.retrieveGetCall<Todo[]>("todos").pipe(
            map(todos => initTodos({ todos }))
        ))
    ));

    constructor(private actions$: Actions,
        private httpCommunicationsService: HttpCommunicationsService) {
    }
}