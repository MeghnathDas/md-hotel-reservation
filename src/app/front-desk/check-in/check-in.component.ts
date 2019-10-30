import { Component, OnInit } from "@angular/core";
import { RoomsService } from "../../services";
import { Observable } from "rxjs";
import { Room } from "../../models";
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: "app-check-in",
  templateUrl: "./check-in.component.html",
  styleUrls: ["./check-in.component.css"]
})
export class CheckInComponent implements OnInit {
  dropdownSettings: IDropdownSettings = {};
  avRooms: Room[] = [];

  constructor(private roomServ: RoomsService) {
  }

  ngOnInit(): void {
    this.roomServ.getRooms().subscribe(dta => {
      this.avRooms = dta;
    });
  
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
}
