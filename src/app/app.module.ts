import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing.module";

import { AppComponent } from "./app.component";
import { SettingsComponent } from "./settings/settings.component";
import { HttpClientModule } from '@angular/common/http';
import { RoomsService } from "./services";
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [AppComponent, SettingsComponent],
  bootstrap: [AppComponent],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }]
})
export class AppModule { }
