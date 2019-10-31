export interface CheckIn {
  id: number;
  guestName: string;
  address: string;
  contact: string;
  pax: number;
  expCheckOutDate: Date;
  occupiedRoomIDs: number[];
}