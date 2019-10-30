import { InMemoryDbService } from "angular-in-memory-web-api";
import { Room, RoomStatus } from "./models";

export class InMemoryDbServ implements InMemoryDbService {
  private dummyExpChkOutDate: Date = new Date();

  constructor() {
    this.dummyExpChkOutDate.setDate(this.dummyExpChkOutDate.getDate() + 3);
  }

  createDb() {
    const rooms: Room[] = [
      {
        id: 1,
        num: "301",
        category: "AC Delux",
        capacity: 2,
        status: RoomStatus.UnOccupied,
        rate: 2500,

        checkinDate: undefined,
        expCheckoutDate: undefined,
        guestName: undefined,
        guestAge: undefined,
        guestAddressLine1: undefined,
        guestAddressLine2: undefined,
        guestCountry: undefined,
        guestContact: undefined
      },
      {
        id: 2,
        num: "302",
        category: "AC Delux",
        capacity: 2,
        status: RoomStatus.Occupied,
        rate: 2500,
        checkinDate: new Date(),
        expCheckoutDate: this.dummyExpChkOutDate,

        guestName: "Demo guest",
        guestAge: 35,
        guestAddressLine1: "Demo Address line 1",
        guestAddressLine2: "Demo Address line 2",
        guestCountry: "India",
        guestContact: "demo@demo.com"
      },
      {
        id: 3,
        num: "304",
        category: "AC Delux",
        capacity: 2,
        status: RoomStatus.Uncleaned,
        rate: 2500,

        checkinDate: undefined,
        expCheckoutDate: undefined,
        guestName: undefined,
        guestAge: undefined,
        guestAddressLine1: undefined,
        guestAddressLine2: undefined,
        guestCountry: undefined,
        guestContact: undefined
      },
      {
        id: 4,
        num: "305",
        category: "AC Double",
        capacity: 4,
        status: RoomStatus.UnOccupied,
        rate: 4000,

        checkinDate: undefined,
        expCheckoutDate: undefined,
        guestName: undefined,
        guestAge: undefined,
        guestAddressLine1: undefined,
        guestAddressLine2: undefined,
        guestCountry: undefined,
        guestContact: undefined
      },
      {
        id: 5,
        num: "401",
        category: "AC Studio",
        capacity: 4,
        status: RoomStatus.UnOccupied,
        rate: 5000,

        checkinDate: undefined,
        expCheckoutDate: undefined,
        guestName: undefined,
        guestAge: undefined,
        guestAddressLine1: undefined,
        guestAddressLine2: undefined,
        guestCountry: undefined,
        guestContact: undefined
      },
      {
        id: 6,
        num: "402",
        category: "AC Studio Prem",
        capacity: 6,
        status: RoomStatus.UnOccupied,
        rate: 6000,

        checkinDate: undefined,
        expCheckoutDate: undefined,
        guestName: undefined,
        guestAge: undefined,
        guestAddressLine1: undefined,
        guestAddressLine2: undefined,
        guestCountry: undefined,
        guestContact: undefined
      }
    ];
    return { rooms: rooms };
  }
}
