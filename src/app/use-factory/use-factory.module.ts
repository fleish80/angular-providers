import { UseFactoryRoutingModule } from './use-factory-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseFactoryComponent } from './use-factory.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [UseFactoryComponent],
  imports: [
    CommonModule,
    UseFactoryRoutingModule
  ]
})
export class UseFactoryModule { }
