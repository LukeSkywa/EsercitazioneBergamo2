import { UsersState, usersReducer } from './users/users.reducers';
import { TodoState, todoReducer } from './todos/todos.reducers';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import { RouterReducerState, routerReducer, getSelectors } from '@ngrx/router-store';

export interface AppState {
    todoState: TodoState;
    usersState: UsersState;
    router: RouterReducerState<any>;
}

export const reducers: ActionReducerMap<AppState> = {
    todoState: todoReducer,
    usersState: usersReducer,
    router: routerReducer
};

export const selectRouter = createFeatureSelector<
    AppState,
    RouterReducerState<any>
>('router');

export const {
    selectCurrentRoute,   // select the current route
    selectQueryParams,    // select the current route query params
    selectQueryParam,     // factory function to select a query param
    selectRouteParams,    // select the current route params
    selectRouteParam,     // factory function to select a route param
    selectRouteData,      // select the current route data
    selectUrl,            // select the current url
  } = getSelectors(selectRouter);