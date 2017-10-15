import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})

export class OperatorComponent implements OnInit {
  activeComponent: string;

  constructor() { }

  ngOnInit() {
    this.activeComponent = 'notifications';
  }

  setActiveComponent(event) {
      this.activeComponent = event;
  }
}
