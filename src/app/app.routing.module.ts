import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontDeskModule } from './front-desk/front-desk.module';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path: 'front-desk',
    loadChildren: () => import('./front-desk/front-desk.module')
      .then(m => m.FrontDeskModule)
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: '',
    redirectTo: 'front-desk',
    pathMatch: 'full'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
