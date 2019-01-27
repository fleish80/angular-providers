import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'just-use',
    pathMatch: 'full'
  },
  {
    path: 'just-use',
    loadChildren: './just-use/just-use.module#JustUseModule',
  },
  {
    path: 'use-class',
    loadChildren: './use-class/use-class.module#UseClassModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
