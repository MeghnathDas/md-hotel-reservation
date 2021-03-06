import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { RoomsService } from '../../services';
import { Observable } from 'rxjs';
import { Room, CheckIn } from '../../models';
import { FormGroup, FormControl, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-date';
import * as moment from 'moment';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  @ViewChild('guestName', {static: true}) nameField: ElementRef;
  avRooms: Room[] = [];
  totalAmt: number;
  expChkOutDtInitial = {};
  minDt = new Date();
  funcIsDateDisabled;

  checkInForm: FormGroup;

  constructor(private roomServ: RoomsService) {
  }

  ngOnInit(): void {
    this.getRooms();
    const tempDt = moment().add(1, 'days').toObject();
    const tempNgbDate = { day: tempDt.date, month: tempDt.months + 1, year: tempDt.years };

    this.checkInForm = new FormGroup({
      guestName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      address: new FormControl('', [Validators.required, Validators.minLength(10)]),
      contact: new FormControl('', [Validators.required, Validators.minLength(10)]),
      pax: new FormControl(1, [Validators.required, Validators.min(1)]),
      chkOutDate: new FormControl(tempNgbDate, [Validators.required]),
      selRooms: new FormControl([], [Validators.required, Validators.minLength(1)])
    }, { validators: [DateNotLessThanTodayValidator('chkOutDate')] });

    this.funcIsDateDisabled = (date: NgbDate, current: { month: number }) => date.before(tempNgbDate);

    this.checkInForm.controls.chkOutDate.valueChanges.subscribe(nwValue => {
      this.onRoomSelection(this.checkInForm.value.selRooms, nwValue);
    });
    this.checkInForm.controls.selRooms.valueChanges.subscribe(nwValue => {
      this.onRoomSelection(nwValue, this.checkInForm.value.chkOutDate);
    });
    this.nameField.nativeElement.focus();
  }

  getRooms(): void {
    this.roomServ.getUnOccupiedRooms().subscribe(dta => {
      this.avRooms = dta;
    });
  }
  onRoomSelection(selRooms: Room[], chkOutDt): void {
    if (!selRooms) { return; }
    if (!chkOutDt) { return; }

    const dtTo = moment([chkOutDt.year, chkOutDt.month - 1, chkOutDt.day]);
    const dtFrom = moment(moment().format('YYYY-MM-DD'), 'YYYY-MM-DD');

    this.totalAmt = undefined;
    if (dtTo.isValid() && dtFrom.isBefore(dtTo)) {
      this.totalAmt = dtTo.diff(dtFrom, 'days')
        * (selRooms.reduce((sum, current) => sum + current.rate, 0));
    }

  }

  doCheckin(): void {
    const chkOutDt = this.checkInForm.value.chkOutDate;
    const chInDta: CheckIn = {
      id: 0,
      guestName: this.checkInForm.value.guestName,
      address: this.checkInForm.value.address,
      contact: this.checkInForm.value.contact,
      pax: this.checkInForm.value.pax,
      expCheckOutDate: moment([chkOutDt.year, chkOutDt.month - 1, chkOutDt.day]).toDate(),
      occupiedRoomIDs: this.checkInForm.value.selRooms.map(rm => rm.id)
    };
    this.roomServ.addCheckIn(chInDta).subscribe(dta => {
      this.resetForm();
    });
  }
  resetForm(): void {
    this.getRooms();
    this.totalAmt = undefined;
    this.checkInForm.reset();
    this.nameField.nativeElement.focus();
  }
}

export function DateNotLessThanTodayValidator(dateControlName: string): ValidatorFn {
  return (group: FormGroup)
    : ValidationErrors | null => {

    // Get the controls to validate
    const dateControl = group.get(dateControlName);

    // Return null if any of the control is not found
    if (!dateControl) { return null; }
    if (!dateControl.value) { return null; }

    // Get the value entered in the control
    const dateControlMomentValue = moment([dateControl.value.year, dateControl.value.month - 1, dateControl.value.day]);
    const dtNow = moment(moment().format('YYYY-MM-DD'), 'YYYY-MM-DD');

    // return null if any of the values are not filled
    if (!dateControlMomentValue) { return null; }

    // Compare the value with today's date
    return dtNow.isBefore(dateControlMomentValue) ? null : { dateSelectionError: true };
  };
}

