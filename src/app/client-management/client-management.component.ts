import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-client-management',
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css']
})
export class ClientManagementComponent implements OnInit {
   clients: Observable<any[]>;
  currentUser;
  CC = false;

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


  selectCC() {
    this.CC = true;
  }
  unselectCC() {
    this.CC = false;
  }
}
