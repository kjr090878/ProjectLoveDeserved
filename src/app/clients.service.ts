import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

export interface Client { name: string; phone: string; address: string; email: string, client_id:1; }


@Injectable()
export class ClientsService {

  private clientsCollection: AngularFirestoreCollection<Client>;
  clients: Observable<Client[]>;
  constructor(private db: AngularFirestore) {
    this.clientsCollection = db.collection<Client>('clients');
  }

  getClients() {
    return this.db.collection('clients').valueChanges();
  }

  addClient(name: string, phone: string, address: string, email: string, client_id:1) {
     const client: Client = { name, phone, address, email, client_id };
     this.clientsCollection.add(client);
  }

}
