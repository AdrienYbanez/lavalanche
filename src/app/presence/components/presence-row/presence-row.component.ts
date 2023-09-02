import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-presence-row',
  templateUrl: './presence-row.component.html',
  styleUrls: ['./presence-row.component.scss']
})
export class PresenceRowComponent {
  @Input() author: string = 'Adrien';
  @Input() nrbPersons: number = 2;
  @Input() dayStyle: string = '#E8563F';
  @Input() comment: string = 'Un exemple de commentaire'

}
