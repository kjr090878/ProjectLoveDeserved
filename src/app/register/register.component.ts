import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  CC = false;

  selectCC() {
    this.CC = true;
  }
  unselectCC() {
    this.CC = false;
  }

  constructor() { }

  ngOnInit() {
  }

}
