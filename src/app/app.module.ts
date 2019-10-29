import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app.routing.module";

import { AppComponent } from "./app.component";
import { SettingsComponent } from "./settings/settings.component";
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDbServ } from './in-memory-db-serv.db.api';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDbServ, { dataEncapsulation: false }
    )  
  ],
  declarations: [AppComponent, SettingsComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
