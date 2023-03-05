import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-presence-month',
  templateUrl: './presence-month.component.html',
  styleUrls: ['./presence-month.component.scss']
})
export class PresenceMonthComponent {
  @Input() monthName: string = 'Nom du moi'

}
