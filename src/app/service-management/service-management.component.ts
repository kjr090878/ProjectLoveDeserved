import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-service-management',
  templateUrl: './service-management.component.html',
  styleUrls: ['./service-management.component.css']
})
export class ServiceManagementComponent implements OnInit {

  @Output() 
  setActiveComponent: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {

  }
    changeComponent() {
      this.setActiveComponent.emit('serviceSchedule');
  }

}
