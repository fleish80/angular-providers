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
  {
    path: 'use-factory',
    loadChildren: './use-factory/use-factory.module#UseFactoryModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
