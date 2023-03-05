import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-presence-day',
  templateUrl: './presence-day.component.html',
  styleUrls: ['./presence-day.component.scss']
})
export class PresenceDayComponent {
  @Input() dayNumber: number = 1;

}
