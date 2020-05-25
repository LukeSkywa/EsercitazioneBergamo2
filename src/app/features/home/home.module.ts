import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
