export enum RoomStatus {
  UnOccupied,
  Occupied,
  Uncleaned
}

export interface Room {
  id: number,
  num: string;
  capacity: number;
  category: string;
  rate: number;
  status: RoomStatus;
  checkinDate: Date;
  expCheckoutDate: Date;
  guestName: string;
  guestAge: number;
  guestAddress: string;
  guestCountry: string;
  guestContact: string;
}
