import { Component, OnInit } from "@angular/core";
import { RoomsService } from "../../services";
import { Observable } from "rxjs";
import { Room } from "../../models";
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import moment from 'moment';

@Component({
  selector: "app-check-in",
  templateUrl: "./check-in.component.html",
  styleUrls: ["./check-in.component.css"]
})
export class CheckInComponent implements OnInit {
  avRooms: Room[] = [];
  totalAmt: number;
  expChkOutDtInitial = {};
  minDt = new Date();
  funcIsDateDisabled;

  checkInForm = new FormGroup({
    guestName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    address: new FormControl('', [Validators.required, Validators.minLength(10)]),
    contact: new FormControl('', [Validators.required, Validators.minLength(10)]),
    pax: new FormControl(1, [Validators.required, Validators.min(1)]),
    chkOutDate: new FormControl(new Date(), [Validators.required]),
    selRooms: new FormControl([], [Validators.required, Validators.minLength(1)])
  });

  constructor(private roomServ: RoomsService) {
  }

  ngOnInit(): void {
    this.roomServ.getRooms().subscribe(dta => {
      this.avRooms = dta;
    });

    const tempDt =  moment().add(1, 'days').toObject();
    const tempNgbDate = {day: tempDt.date, month: tempDt.months+1, year: tempDt.years}; 
    this.funcIsDateDisabled = (date: NgbDate, current: {month: number}) => date.before(tempNgbDate);
    this.checkInForm.controls.chkOutDate.setValue(tempNgbDate);
    this.checkInForm.updateValueAndValidity();

    this.checkInForm.controls.chkOutDate.valueChanges.subscribe(nwValue => {
        const dtTo = moment([nwValue.year, nwValue.month-1, nwValue.day]);
        this.onRoomSelection(this.checkInForm.value.selRooms, nwValue);
    });
    this.checkInForm.controls.selRooms.valueChanges.subscribe(nwValue => {
        this.onRoomSelection(nwValue, this.checkInForm.value.chkOutDate);
    });
  }

  onRoomSelection(selRooms: Room[], chkOutDt): void {
    const dtTo = moment([chkOutDt.year, chkOutDt.month-1, chkOutDt.day]);
    const dtFrom = moment(moment().format('YYYY-MM-DD'), 'YYYY-MM-DD');

    if (dtTo.isValid()) {
      this.totalAmt = dtTo.diff(dtFrom, 'days')
                        * (selRooms.reduce((sum, current) => sum + current.rate, 0));
    } else {
      this.totalAmt = undefined;
    }

  }
  doCheckin(): void {
    console.log(this.checkInForm.value);
  }
}
