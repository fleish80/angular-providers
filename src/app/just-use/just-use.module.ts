import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JustUseComponent } from './just-use.component';
import { JustRouteRoutingModule } from './just-route-routing.module';

@NgModule({
  declarations: [JustUseComponent],
  imports: [
    CommonModule,
    JustRouteRoutingModule
  ]
  // exports: [JustUseComponent]
})
export class JustUseModule { }
