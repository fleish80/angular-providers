import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseClassComponent } from './use-factory.component';

const routes: Routes = [
  {
    path: '',
    component: UseClassComponent,
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
export class UseClassRoutingModule { }
