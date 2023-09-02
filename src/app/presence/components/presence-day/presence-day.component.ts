import {Component, Input} from '@angular/core';
import {TPresenceLigth} from "../../types/t-presence-ligth";

@Component({
  selector: 'app-presence-day',
  templateUrl: './presence-day.component.html',
  styleUrls: ['./presence-day.component.scss']
})
export class PresenceDayComponent {
  @Input() dayNumber: number = 1;
  @Input() active: boolean = false;
  @Input() presences: TPresenceLigth[] = [
    {
      nbrAdults: 2,
      nbrChildren: 0,
      presenceId: 5,
      authorName: 'Adrien',
      color: '#E8563F',
      comment: 'J\'arriverai vers midi, avec Pauline. Nous aurons deja mange et nous avons pris les jeux de societe'
    },
    {
      nbrAdults: 2,
      nbrChildren: 2,
      presenceId: 5,
      authorName: 'Bruno',
      color: '#F5BA45',
      comment: 'Content de vous retrouver'
    }
  ];

  public get nbrChildren() {
    let nbrChildren = 0;
    this.presences.forEach(presence => {
      nbrChildren = nbrChildren + presence.nbrChildren;
      // console.warn('iteration');
    })
    return nbrChildren;
  }

  public get nbrAdults() {
    let nbrAdults = 0;
    this.presences.forEach(presence => {
      nbrAdults = nbrAdults + presence.nbrAdults;
      // console.warn('iteration');
    })
    return nbrAdults;
  }

}
