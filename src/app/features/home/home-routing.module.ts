import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent }];
=======
import { HomeComponent } from './components/main/home.component';
import { CoroselloComponent } from './components/corosello/corosello.component';


const routes: Routes = [{
  path: '', component: HomeComponent, children: [
    {path: "carosello", component: CoroselloComponent}
  ]
}];
>>>>>>> master

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
