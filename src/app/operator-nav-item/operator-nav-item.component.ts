import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-operator-nav-item',
  templateUrl: './operator-nav-item.component.html',
  styleUrls: ['./operator-nav-item.component.css']
})
export class OperatorNavItemComponent implements OnInit {

  @Input() menuItem: string;
  @Input() menuUrl: string;
  constructor() {
  }

  ngOnInit() {
  }

}
