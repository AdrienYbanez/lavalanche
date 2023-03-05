import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-input-full-width',
  templateUrl: './input-full-width.component.html',
  styleUrls: ['./input-full-width.component.scss']
})
export class InputFullWidthComponent {
  @Input() label?: string;
  @Input() form: FormGroup = new FormGroup<any>({});
  @Input() control: FormControl = new FormControl<any>({});
  @Input() type: string = 'text'

}
