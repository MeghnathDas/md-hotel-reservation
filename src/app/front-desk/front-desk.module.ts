import { NgModule } from "@angular/core";
import { FrontDeskComponent } from "./front-desk.component";
import { FrontDeskRoutingModule } from "./front-desk.routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  imports: [FrontDeskRoutingModule],
  declarations: [FrontDeskComponent, DashboardComponent]
})
export class FrontDeskModule {}
