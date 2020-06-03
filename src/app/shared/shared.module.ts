import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextComponent } from './components/input-text/input-text.component';

@NgModule({
  declarations: [InputTextComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [InputTextComponent, CommonModule, FormsModule,
    ReactiveFormsModule]
})
export class SharedModule { }
