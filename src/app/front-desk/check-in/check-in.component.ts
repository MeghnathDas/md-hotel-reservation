import { Component, OnInit, ViewChild, ElementRef  } from "@angular/core";
import { RoomsService } from "../../services";
import { Observable } from "rxjs";
import { Room, CheckIn } from "../../models";
import { FormGroup, FormControl, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import moment from 'moment';

@Component({
  selector: "app-check-in",
  templateUrl: "./check-in.component.html",
  styleUrls: ["./check-in.component.css"]
})
export class CheckInComponent implements OnInit {
  @ViewChild("guestName") nameField: ElementRef;
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
    chkOutDate: new FormControl({}, [Validators.required]),
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

    this.checkInForm.setValidators([DateNotLessThanTodayValidator('chkOutDate')]);
    this.checkInForm.controls.chkOutDate.setValue(tempNgbDate);
    this.checkInForm.updateValueAndValidity();

    this.checkInForm.controls.chkOutDate.valueChanges.subscribe(nwValue => {
        const dtTo = moment([nwValue.year, nwValue.month-1, nwValue.day]);
        this.onRoomSelection(this.checkInForm.value.selRooms, nwValue);
    });
    this.checkInForm.controls.selRooms.valueChanges.subscribe(nwValue => {
        this.onRoomSelection(nwValue, this.checkInForm.value.chkOutDate);
    });
    this.nameField.nativeElement.focus();
  }

  onRoomSelection(selRooms: Room[], chkOutDt): void {
    const dtTo = moment([chkOutDt.year, chkOutDt.month-1, chkOutDt.day]);
    const dtFrom = moment(moment().format('YYYY-MM-DD'), 'YYYY-MM-DD');

    this.totalAmt = undefined;
    if (dtTo.isValid() && dtFrom.isBefore(dtTo)) {
      this.totalAmt = dtTo.diff(dtFrom, 'days')
                        * (selRooms.reduce((sum, current) => sum + current.rate, 0));
    }

  }

  doCheckin(): void {
    const chInDta: CheckIn = {
      id: undefined,
      guestName: this.checkInForm.value.guestName,
      address: this.checkInForm.value.address,
      contact: this.checkInForm.value.contact,
      pax: this.checkInForm.value.pax,
      expCheckOutDate: this.checkInForm.value.chkOutDate,
      occupiedRoomIDs: this.checkInForm.value.selRooms.map(rm => rm.id)
    };
    this.roomServ.addCheckIn(chInDta);
  }
}

export function DateNotLessThanTodayValidator(dateControlName: string): ValidatorFn {
    return (group: FormGroup)
        : ValidationErrors | null => {

        // Get the controls to validate
        const dateControl = group.get(dateControlName);

        // Return null if any of the control is not found
        if (!dateControl) { return null; }

        // Get the value entered in the control
        const dateControlValue = moment([dateControl.value.year, dateControl.value.month-1, dateControl.value.day]);
        const dtNow = moment(moment().format('YYYY-MM-DD'), 'YYYY-MM-DD');

        // return null if any of the values are not filled
        if (!dateControlValue) { return null; }

        // Compare the value with today's date        
        return dtNow.isBefore(dateControlValue) ? null :  { dateSelectionError: true };
    };
}

