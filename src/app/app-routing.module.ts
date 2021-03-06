import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuardService } from './core/guards/login-guard.service';
import { LoggedGuardService } from './core/guards/logged-guard.service';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./features/login/login.module').then(m => m.LoginModule), canLoad: [LoggedGuardService], canActivate: [LoggedGuardService] },
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule), canLoad: [LoginGuardService], canActivate: [LoginGuardService] },
  { path: 'todos', loadChildren: () => import('./features/todos/todos.module').then(m => m.TodosModule), canLoad: [LoginGuardService], canActivate: [LoginGuardService] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
