import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent implements OnInit {
  clients = [
    {id: '1', name: 'Bruce', m: 'L', lastName: 'Wayne', suffix: 'Mr', address: 'address 1', city: 'Gotham', state: 'GA',
      zip: '30318', birthDate: '01/01/01', pharmacy: {name: 'cvs', location: 'some address'}},
    {id: '2', name: 'Selyna', m: 'S', lastName: 'Kyle', suffix: 'Mrs', address: 'She live in the streets', city: 'Gotham', state: 'GA',
      zip: '30318', birthDate: '01/01/01', pharmacy: {name: 'cvs', location: 'some address'}},
    {id: '3', name: 'Oswald', m: 'S', lastName: 'Cobblepot', suffix: 'Mr', address: 'address 2', city: 'Gotham', state: 'GA',
      zip: '30318', birthDate: '01/01/01', pharmacy: {name: 'cvs', location: 'some address'}}
  ];
  currentUser = {id: '0', name: 'New Client'};

  constructor() { }

  ngOnInit() {
  }

}
