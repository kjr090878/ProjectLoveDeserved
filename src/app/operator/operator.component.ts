import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})

export class OperatorComponent implements OnInit {

  components = {
    clientManagement : false,
    notifications: true,
    pendingTasks: false,
    serviceManagement: false
  };

  resetComponents() {
    this.components.serviceManagement = false;
    this.components.pendingTasks = false;
    this.components.clientManagement = false;
    this.components.notifications = false;
  }

  showPendingTasks() {
    this.resetComponents();
    this.components.pendingTasks = true;
  }

  constructor() { }

  ngOnInit() {
  }

}
