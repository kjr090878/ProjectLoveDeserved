import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-operator-nav-item',
  templateUrl: './operator-nav-item.component.html',
  styleUrls: ['./operator-nav-item.component.css']
})
export class OperatorNavItemComponent implements OnInit {

  menuItem: string;
  menuLink: string;
  constructor(menuItem, menuLink) {
    this.menuItem = menuItem;
    this.menuLink = menuLink;
  }

  ngOnInit() {
  }

}
