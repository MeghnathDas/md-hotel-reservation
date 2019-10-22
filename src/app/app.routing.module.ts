import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontDeskModule } from './front-desk/front-desk.module';

const routes: Routes = [
  {
    path: 'front-desk',
    loadChildren: () => import('./front-desk/front-desk.module')
      .then(m => m.FrontDeskModule)
  },
  {
    path: '',
    redirectTo: 'front-desk',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
