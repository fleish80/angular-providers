import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JustUseComponent } from './just-use.component';

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
