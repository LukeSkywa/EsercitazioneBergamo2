import { NgModule } from '@angular/core';
import { DemoComponent } from './components/demo/demo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
  declarations: [DemoComponent],
  imports: [
    SharedModule,
    DemoRoutingModule
  ],
  exports: [DemoComponent]
})
export class DemoModule { }
