import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { CoroselloComponent } from './components/corosello/corosello.component';
import { HomeComponent } from './components/main/home.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HomeComponent, CoroselloComponent],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
