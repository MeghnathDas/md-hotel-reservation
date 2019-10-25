import { Action } from '@ngrx/store';
import { Room } from '../models';

export enum RoomActionTypes {
  AddRoom = "Room Added",
  ModifyRoom = "Room Modified"
}

export class AddAction implements Action {
  readonly type = RoomActionTypes.AddRoom;

  constructor(public payload: Room) {}
}

export class ModifiedAction implements Action {
  readonly type = RoomActionTypes.ModifyRoom;

  constructor(public payload: Room) {}
}

export type RoomAction = AddAction | ModifiedAction;