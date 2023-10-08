import { Injectable } from '@angular/core';
import {addDoc, collection, collectionData, Firestore, where} from "@angular/fire/firestore";
import {TPresenceCreation} from "../types/t-presence-creation";
import {catchError, tap} from "rxjs";
import {TPresenceDto} from "../types/t-presence-dto";
import {TPresence} from "../types/t-presence";
import {transformTPresenceDtoToTPresence} from "./utils/transform-t-presence-dto-to-t-presence";

@Injectable({
  providedIn: 'root'
})
export class PresenceService {
  private presencesCollection = collection(this.fireStore, 'presences');

  constructor(
    private readonly fireStore: Firestore
  ) { }

  public loadPresences() {
    return collectionData(this.presencesCollection, {idField:'id'})
      .pipe(
        tap(presencesDto => {
          if(presencesDto.length > 0) {
            const presences: TPresence[] = [];
            presencesDto.forEach(presenceDto => {
              console.warn('PresenceDto : ', presenceDto);
              console.warn('Presence : ', transformTPresenceDtoToTPresence(presenceDto as TPresenceDto));
            })
          }
          console.warn('presences dans le service : ', presencesDto);
        })
      );
  }

  public createPresence(newPresence: TPresenceCreation) {
    return addDoc(this.presencesCollection, <TPresenceCreation> newPresence)
      .then(rep => {
        console.warn('reponse de creation : ', rep);
      })
      .catch(err => {
        console.error('une erreur est survenur lors de la creation de la presence : ', err)
      })
  }
}
