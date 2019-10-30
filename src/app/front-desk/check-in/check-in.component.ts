import { Component, OnInit } from "@angular/core";
import { RoomsService } from "../../services";
import { Observable } from "rxjs";
import { Room } from "../../models";
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: "app-check-in",
  templateUrl: "./check-in.component.html",
  styleUrls: ["./check-in.component.css"]
})
export class CheckInComponent implements OnInit {
  avRooms: Room[] = [];
  totalAmt: number;

  checkInForm = new FormGroup({
    guestName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required, Validators.minLength(10)]),
    contact: new FormControl('', [Validators.required, Validators.minLength(10)]),
    pax: new FormControl(1, [Validators.required, Validators.min(1)]),
    chkOutDate: new FormControl({}, [Validators.required]),
    selRooms: new FormControl([], [Validators.required, Validators.minLength(1)])
  });

  constructor(private roomServ: RoomsService) {
  }

  ngOnInit(): void {
    this.roomServ.getRooms().subscribe(dta => {
      this.avRooms = dta;
    });
  }

  onRoomSelection(selRooms: Room[]): void {
    //const chkOutDt = this.checkInForm.value.chkOutDate;
    //const dtSelected = new Date(chkOutDt.year, chkOutDt.month, chkOutDt.day);
    //const todayDt = new Date();
    //const nowDate = new Date(todayDt.getFullYear(), todayDt.getMonth(), todayDt.getDay());
    
    //// Explicitly convert Date to Number
    //const pastDaysOfYear = ( chkOutDt.valueOf() - (nowDate).valueOf() );
    //console.log(pastDaysOfYear);

   this.totalAmt = selRooms.reduce((sum, current) => sum + current.rate, 0);
  }
  doCheckin(): void {
    console.log(this.checkInForm.value);
  }
}
