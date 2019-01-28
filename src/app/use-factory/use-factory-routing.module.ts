import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseFactoryComponent } from './use-factory.component';

const routes: Routes = [
  {
    path: '',
    component: UseFactoryComponent,
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
export class UseFactoryRoutingModule { }
