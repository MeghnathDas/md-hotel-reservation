export enum RoomStatus {
  UnOccupied,
  Occupied,
  Uncleaned
}

export interface Room {
  num: string;
  capacity: number;
  category: string;
  status: RoomStatus;
  checkinDate: Date;
  expCheckoutDate: Date;
  guestName: string;
  guestAge: string;
  guestAddressLine1: string;
  guestAddressLine2: string;
  guestCountry: string;
  guestContact: string;
}
