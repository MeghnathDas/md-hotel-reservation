import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FrontDeskComponent } from './front-desk.component';

const routes: Routes = [
  {
    path: '',
    component: FrontDeskComponent
  },
  /**{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }*/
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [ RouterModule ]
})
export class FrontDeskRoutingModule {
  
}