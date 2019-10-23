import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing.module";

import { AppComponent } from "./app.component";
import { SettingsComponent } from "./settings/settings.component";

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule, AppRoutingModule],
  declarations: [AppComponent, SettingsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
