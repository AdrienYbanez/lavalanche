import { Injectable } from '@angular/core';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class PresenceService {

  constructor(
    private readonly fireStore: Firestore
  ) { }

  public getPresences() {
    let presencesCollection = collection(this.fireStore, 'presence');
    return collectionData(presencesCollection, {idField:'id'});
  }
}
