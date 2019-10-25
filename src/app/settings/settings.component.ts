import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Room, AppState } from "../models";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"]
})
export class SettingsComponent {
  rooms: Observable<Room[]>;

  constructor(private roomStore: Store<AppState>) {
  }

  ngOnInit(): void {
    this.rooms = this.roomStore.select(store => store.rooms);
  }
}
