export interface CheckIn {
  no: number;
  guestName: string;
  address: string;
  contact: string;
  pax: number;
  expCheckOutDate: Date;
  occupiedRoomIDs: number[];
}