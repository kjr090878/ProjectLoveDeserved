import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ClientsService } from '../clients.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css'],
})
export class ClientManagementComponent implements OnInit {
   clients: Observable<any[]>;
  currentUser;
  CC = false;
  ssi;

  constructor(private clientsService: ClientsService) {

  }

  ngOnInit() {
  this.currentUser = { client_id: '0', address: '', email: '', first_name: '', last_name: '', phone: '', pharmacy: {name: ''}};
    this.getClients();
  }

  getClients() {
    this.clients = this.clientsService.getClients();
    console.log(this.currentUser);
  }

  getUser() {
     // this.currentUser = this.clientsService.getClientById(this.ssi);
    this.currentUser = { SSI: this.ssi, client_id: '0', address: 'Some Address', email: 'test@hackathon.com',
      first_name: 'Theresa', m: 'R', last_name: 'Lacris', phone: '458 9856', suffix: 'Mrs',
      city: 'Atlanta', zip: '30318', state: 'GA',  pharmacy: {name: 'cvs', location: 'Some address 2'}};
  }

  saveDummy(){
    this.currentUser = { client_id: '0', address: '', email: '', first_name: '', last_name: '', phone: '', pharmacy: {name: ''}};
    this.ssi = '';
    alert('Client succesfully saved!');
  }

  selectCC() {
    this.CC = true;
  }
  unselectCC() {
    this.CC = false;
  }
}
