import { NgModule } from '@angular/core';
import { FrontDeskComponent } from './front-desk.component';
import { FrontDeskRoutingModule } from './front-desk.routing.module';

@NgModule({
  imports: [
    FrontDeskComponent,
    FrontDeskRoutingModule
  ]
})
export class FrontDeskModule {

}
