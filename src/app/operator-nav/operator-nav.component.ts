import {Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operator-nav',
  templateUrl: './operator-nav.component.html',
  styleUrls: ['./operator-nav.component.css']
})
export class OperatorNavComponent implements OnInit {
  @Input() 
  activeComponent: string;
  @Output() 
  setActiveComponent: EventEmitter<string> = new EventEmitter<string>();
    
  constructor() { }

  ngOnInit() {
  }

  changeNav(component: string) {
      this.setActiveComponent.emit(component);
  }
}
