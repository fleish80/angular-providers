import { UseFactoryRoutingModule } from './use-factory-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseFactoryComponent } from './use-factory.component';


@NgModule({
  declarations: [UseFactoryComponent],
  imports: [
    CommonModule,
    UseFactoryRoutingModule
  ]
})
export class UseFactoryModule { }
