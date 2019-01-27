import { UseClassRoutingModule } from './use-class-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseClassComponent } from './use-class.component';


@NgModule({
  declarations: [UseClassComponent],
  imports: [
    CommonModule,
    UseClassRoutingModule
  ]
})
export class UseClassModule { }
