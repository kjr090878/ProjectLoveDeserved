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

  constructor(private clientsService: ClientsService) {
  
  }

  ngOnInit() {
  this.currentUser = { id: '0', name: 'New Client' };
    this.getClients();
  }

  getClients() {
    this.clients = this.clientsService.getClients();
  }
  
}
