import { Component, OnInit } from "@angular/core";
import { RoomsService } from "../../services";
import { Observable } from "rxjs";
import { Room } from "../../models";

@Component({
  selector: "app-check-in",
  templateUrl: "./check-in.component.html",
  styleUrls: ["./check-in.component.css"]
})
export class CheckInComponent implements OnInit {
  avRooms: Room[] = [];

  constructor(private roomServ: RoomsService) {
  }

  ngOnInit(): void {
    this.roomServ.getRooms().subscribe(dta => {
      this.avRooms = dta;
    });
  }
}
