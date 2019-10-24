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
        num: "301",
        category: "AC Delux",
        capacity: 2,
        status: RoomStatus.UnOccupied
      },
      {
        num: "302",
        category: "AC Delux",
        capacity: 2,
        status: RoomStatus.Occupied,
        checkinDate: new Date(),
        expCheckoutDate: this.dummyExpChkOutDate
      },
      {
        num: "304",
        category: "AC Delux",
        capacity: 2,
        status: RoomStatus.Uncleaned
      },
      {
        num: "305",
        category: "AC Double",
        capacity: 4,
        status: RoomStatus.UnOccupied
      },
      {
        num: "401",
        category: "AC Studio",
        capacity: 4,
        status: RoomStatus.UnOccupied
      },
      {
        num: "402",
        category: "AC Studio Prem",
        capacity: 6,
        status: RoomStatus.UnOccupied
      }
    ];
  }
}
