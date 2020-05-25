import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextComponent } from './components/input-text/input-text.component';

@NgModule({
  declarations: [InputTextComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [InputTextComponent, CommonModule, FormsModule]
})
export class SharedModule { }
