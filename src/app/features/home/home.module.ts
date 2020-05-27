import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/main/home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CoroselloComponent } from './components/corosello/corosello.component';


@NgModule({
  declarations: [HomeComponent, CoroselloComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
