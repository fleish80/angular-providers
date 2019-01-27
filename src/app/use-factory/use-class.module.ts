import { UseClassRoutingModule } from './use-factory-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseClassComponent } from './use-factory.component';


@NgModule({
  declarations: [UseClassComponent],
  imports: [
    CommonModule,
    UseClassRoutingModule
  ]
})
export class UseClassModule { }
