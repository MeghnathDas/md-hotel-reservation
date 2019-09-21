import { Routes } from '@angular/router';
import { FrontDeskModule } from '/front-desk/front-desk.module';

const routes: Routes = [
  {
    path: 'frontDesk',
    loadChildren: () => import('../front-desk/front-desk.module')
      .then(m => m.FrontDeskModule)
  },
  {
    path: '',
    redirectTo: 'frontDesk',
    pathMatch: 'full'
  }
];