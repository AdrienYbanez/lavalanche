import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {TPresence} from "../types/t-presence";

@Injectable({
  providedIn: 'root'
})
export class PresencesStoreService {

  private _presences: BehaviorSubject<TPresence[]> = new BehaviorSubject<TPresence[]>([]);

  constructor() { }

  public presences(): Observable<TPresence[]> {
    return this._presences as Observable<TPresence[]>;
  }

  public setPresences(presences: TPresence[]): void {
    this._presences.next(presences);
  }
}
