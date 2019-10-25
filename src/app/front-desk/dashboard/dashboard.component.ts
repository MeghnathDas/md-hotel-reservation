import { Component, OnInit } from "@angular/core";
import { RoomsService } from "../../services";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import { Room, AppState } from "../../models";

@Component({
  selector: "app-dashboard",
  styleUrls: ["./dashboard.component.css"],
  templateUrl: "./dashboard.component.html"
})
export class DashboardComponent implements OnInit {
  rooms: Observable<Room[]>;

  constructor(private roomStore: Store<AppState>) {
  }

  ngOnInit(): void {
    this.rooms = this.roomStore.select(store => store.rooms);
  }
}
