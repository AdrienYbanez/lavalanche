import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-raised-button',
  templateUrl: './raised-button.component.html',
  styleUrls: ['./raised-button.component.scss']
})
export class RaisedButtonComponent {
  @Input() label: string = 'Action'
  @Input() class: string = 'success'
}
