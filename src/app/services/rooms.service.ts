import { Injectable } from "@angular/core";
import { Room } from "../models";

@Injectable()
export class RoomsService {
  public getRooms(): Room[]{
    return [
      {num: '101', category: 'AC Delux', capacity: 2},
      {num: '102', category: 'AC Delux', capacity: 2},
      {num: '103', category: 'AC Double', capacity: 4},
      {num: '104', category: 'AC Delux', capacity: 2}
    ]
  }
}
