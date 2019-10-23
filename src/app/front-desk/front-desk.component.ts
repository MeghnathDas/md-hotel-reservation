import { Component, OnInit } from '@angular/core';
import { NavMenuItem } from '../models';

@Component({
  selector: 'app-front-desk',
  templateUrl: './front-desk.component.html',
  styleUrls: ['./front-desk.component.css']
})
export class FrontDeskComponent implements OnInit {
  selectedMnu: NavMenuItem = {};
  menus: NavMenuItem[] = [
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
    this.selectedMnu = this.menus[0];
  }

  ngOnInit() {

  }

  onMenuSelect(selMnu: NavMenuItem) {
    this.selectedMnu = selMnu;
  }
}