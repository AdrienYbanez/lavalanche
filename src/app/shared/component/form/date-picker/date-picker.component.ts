import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  @Input() label?: string;
  @Input() form: FormGroup = new FormGroup<any>({});
  @Input() control: FormControl = new FormControl<any>({});

}
