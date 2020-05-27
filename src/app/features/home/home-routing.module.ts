import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/main/home.component';
import { CoroselloComponent } from './components/corosello/corosello.component';


const routes: Routes = [{
  path: '', component: HomeComponent, children: [
    {path: "carosello", component: CoroselloComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
