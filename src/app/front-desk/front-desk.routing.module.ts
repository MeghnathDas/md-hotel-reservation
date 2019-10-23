import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FrontDeskComponent } from "./front-desk.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CheckInComponent } from "./check-in/check-in.component";
import { CheckOutComponent } from "./check-out/check-out.component";

const routes: Routes = [  
  {
    path: "",
    component: FrontDeskComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent
      },
      {
        path: "check-in",
        component: CheckInComponent
      },
      {
        path: "check-out",
        component: CheckOutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontDeskRoutingModule {}
