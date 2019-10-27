import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { Room, AppState } from "./models";

@Component({
  selector: 'md-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  prodName = 'HMS';
  coNme = 'MD';
  collapsed = true;

  constructor() {
  }
}
