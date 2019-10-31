import { Injectable } from "@angular/core";
import { Room, RoomStatus, CheckIn } from "../models";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RoomsService {
  private roomsUrl = 'api/rooms'
  private checkInUrl = 'api/checkIns';

  constructor(private httpc: HttpClient) {
  }

  public getRooms(): Observable<Room[]> {
    return this.httpc.get<Room[]>(this.roomsUrl);
  }

  public getUnOccupiedRooms(): Observable<Room[]> {
    return this.httpc.get<Room[]>(`${this.roomsUrl}?status=0`);
  }

  public addCheckIn(chkIn: CheckIn) {
    this.getRooms()
        .subscribe(dta => {
          dta.filter(rm => chkIn.occupiedRoomIDs.includes(rm.id))
             .forEach(rm => {
                rm.status = RoomStatus.Occupied;
                rm.checkinDate = new Date();
                rm.expCheckoutDate = chkIn.expCheckOutDate;
                rm.guestName = chkIn.guestName;
                rm.guestAge = 0;
                rm.guestAddress = chkIn.address;
                rm.guestCountry = "";
                rm.guestContact = chkIn.contact; 
                
                this.httpc.put(this.roomsUrl, rm);
              });
        });

    return this.httpc.post(this.checkInUrl, chkIn);
  }
}
