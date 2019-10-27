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

  constructor(private roomServ: RoomsService) {
  }

  ngOnInit(): void {
    this.roomServ.getRooms().subscribe(dta => this.rooms = dta);
  }
}
