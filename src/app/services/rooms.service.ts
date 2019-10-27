import { Injectable } from "@angular/core";
import { Room, RoomStatus } from "../models";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RoomsService {
  private roomsUrl = 'api/rooms'

  constructor(private httpc: HttpClient) {
  }

  public getRooms(): Observable<Room[]> {
    return this.httpc.get<Room[]>(this.roomsUrl);
  }
}
