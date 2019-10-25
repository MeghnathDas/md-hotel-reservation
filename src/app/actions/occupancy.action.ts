import { Action } from '@ngrx/store';
import { Room } from '../models';

export enum OccupancyActionTypes {
  CheckIn = "CheckIn",
  CheckOut = "CheckOut"
}

export class CheckInAction implements Action {
  readonly type = OccupancyActionTypes.CheckIn;

  constructor(public payload: Room) {}
}

export class CheckOutAction implements Action {
  readonly type = OccupancyActionTypes.CheckOut;

  constructor(public payload: Room) {}
}

export type OccupancyAction = CheckInAction | CheckOutAction;