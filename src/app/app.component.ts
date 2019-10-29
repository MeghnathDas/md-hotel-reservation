import { Component } from '@angular/core';
import { Room } from "./models";

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
