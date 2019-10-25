import { Injectable } from "@angular/core";
import { Room, RoomStatus } from "../models";

@Injectable()
export class RoomsService {
  private dummyExpChkOutDate: Date = new Date();

  constructor() {
    this.dummyExpChkOutDate.setDate(this.dummyExpChkOutDate.getDate() + 3)
  }

  public getRooms(): Room[] {
    return [
      {
        id: 1,
        num: "301",
        category: "AC Delux",
        capacity: 2,
        status: RoomStatus.UnOccupied
      },
      {
        id: 2,
        num: "302",
        category: "AC Delux",
        capacity: 2,
        status: RoomStatus.Occupied,
        checkinDate: new Date(),
        expCheckoutDate: this.dummyExpChkOutDate
      },
      {
        id: 3,
        num: "304",
        category: "AC Delux",
        capacity: 2,
        status: RoomStatus.Uncleaned
      },
      {
        id: 4,
        num: "305",
        category: "AC Double",
        capacity: 4,
        status: RoomStatus.UnOccupied
      },
      {
        id: 5,
        num: "401",
        category: "AC Studio",
        capacity: 4,
        status: RoomStatus.UnOccupied
      },
      {
        id: 6,
        num: "402",
        category: "AC Studio Prem",
        capacity: 6,
        status: RoomStatus.UnOccupied
      }
    ];
  }
}
