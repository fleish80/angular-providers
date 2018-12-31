import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JustUseComponent } from './just-use.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: JustUseComponent,
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class JustRouteRoutingModule { }
