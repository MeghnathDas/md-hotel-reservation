import { Component } from '@angular/core';
import { RoomsService } from '../../services';

@Component({
  selector: 'app-dashboard',
  styleUrls: [ './dashboard.component.css'],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  rooms = [];

  constructor(roomsServ: RoomsService) {
    this.rooms = roomsServ.getRooms();
  }
}