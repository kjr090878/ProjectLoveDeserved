import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class TasksService {

  constructor(private db: AngularFirestore) { }

  getTasks() {
    return this.db.collection('tasks').valueChanges(); 
  }
}