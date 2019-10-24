import { Injectable } from "@angular/core";
import { Room } from "../models";

@Injectable()
export class RoomsService {
  public getRooms(): Room[]{
    return [
      {num: '301', category: 'AC Delux', capacity: 2},
      {num: '302', category: 'AC Delux', capacity: 2},
      {num: '304', category: 'AC Delux', capacity: 2},
      {num: '305', category: 'AC Double', capacity: 4},
      {num: '401', category: 'AC Studio', capacity: 4},
      {num: '402', category: 'AC Studio Prem', capacity: 6}
    ]
  }
}
