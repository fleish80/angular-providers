import { UseValueRoutingModule } from './use-value-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseValueComponent } from './use-value.component';


@NgModule({
  declarations: [UseValueComponent],
  imports: [
    CommonModule,
    UseValueRoutingModule
  ]
})
export class UseValueModule { }
