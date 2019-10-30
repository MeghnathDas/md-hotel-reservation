import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FrontDeskComponent } from "./front-desk.component";
import { FrontDeskRoutingModule } from "./front-desk.routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CheckInComponent } from "./check-in/check-in.component";
import { CheckOutComponent } from "./check-out/check-out.component";
import { RoomsService } from "../services";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDbServ } from '../in-memory-db-serv.db.api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  imports: [
    FrontDeskRoutingModule,
    CommonModule,
    FormsModule,
    NgbModule,
    NgMultiSelectDropDownModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forFeature(
      InMemoryDbServ, { dataEncapsulation: false }
    ),
  ],
  declarations: [
    FrontDeskComponent,
    DashboardComponent,
    CheckInComponent,
    CheckOutComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [RoomsService]
})
export class FrontDeskModule {}
