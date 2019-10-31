import { Injectable } from "@angular/core";
import { Room, RoomStatus, CheckIn } from "../models";
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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

  public getRoomsById(roomIds: number[]): Observable<Room[]> {
    return this.httpc.get<Room[]>(`${this.roomsUrl}?id=${JSON.stringify(roomIds)}`);
  }

  public getUnOccupiedRooms(): Observable<Room[]> {
    return this.httpc.get<Room[]>(`${this.roomsUrl}?status=0`);
  }

  public addCheckIn(chkIn: CheckIn) {
    this.getRoomsById(chkIn.occupiedRoomIDs)
        .pipe(switchMap(rms => {
                        const dta = rms.map(rm => {                    
                          rm.status = RoomStatus.Occupied;
                          rm.checkinDate = new Date();
                          rm.expCheckoutDate = chkIn.expCheckOutDate;
                          rm.guestName = chkIn.guestName;
                          rm.guestAge = 0;
                          rm.guestAddress = chkIn.address;
                          rm.guestCountry = "";
                          rm.guestContact = chkIn.contact;
                          return rm;
                        });
                        return dta;              
                      }))
        .pipe(switchMap(fDta => {
          return this.httpc.put(this.roomsUrl, fDta);
        }))
        .pipe(switchMap(() => {
          return this.httpc.post(this.checkInUrl, chkIn);
        }));
  }
}
