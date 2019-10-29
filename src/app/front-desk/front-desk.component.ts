import { Component, OnInit } from '@angular/core';
import { NavMenuItem } from '../models';

@Component({
  selector: 'app-front-desk',
  templateUrl: './front-desk.component.html',
  styleUrls: ['./front-desk.component.css']
})
export class FrontDeskComponent implements OnInit {
  menus = [
    { 
      id: 1,
      caption: 'Dashboard',
      route: 'dashboard'
    },
    { 
      id: 2,
      caption: 'Check In',
      route: 'check-in'
    },
    { 
      id: 3,
      caption: 'Check Out',
      route: 'check-out'
    }
  ];

  constructor() {
  }

  ngOnInit() {

  }

  onMenuSelect(selMnu: NavMenuItem) {
  }
}