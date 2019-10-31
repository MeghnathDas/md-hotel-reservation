import { InMemoryDbService } from "angular-in-memory-web-api";
import { Room, RoomStatus, CheckIn } from "./models";

export class InMemoryDbServ implements InMemoryDbService {
  private dummyExpChkOutDate: Date = new Date();

  constructor() {
    this.dummyExpChkOutDate.setDate(this.dummyExpChkOutDate.getDate() + 3);
  }

  createDb() {
    const roomDta: Room[] = [
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
        guestAddress: undefined,
        guestCountry: undefined,
        guestContact: undefined
      },
      {
        id: 2,
        num: "302",
        category: "AC Delux",
        capacity: 2,
        status: RoomStatus.UnOccupied,
        rate: 2500,

        checkinDate: undefined,
        expCheckoutDate: undefined,
        guestName: undefined,
        guestAge: undefined,
        guestAddress: undefined,
        guestCountry: undefined,
        guestContact: undefined
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
        guestAddress: undefined,
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
        guestAddress: undefined,
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
        guestAddress: undefined,
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
        guestAddress: undefined,
        guestCountry: undefined,
        guestContact: undefined
      }
    ];
    const checkInDta: CheckIn[] = [ ];

    return { rooms: roomDta, checkIns: checkInDta };
  }

  genId<T extends Room | CheckIn>(myTable: T[]): number {
    return myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 1;
  }
}
