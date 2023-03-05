import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-date-range-picker',
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss']
})
export class DateRangePickerComponent {
  @Input() label?: string;
  @Input() form: FormGroup = new FormGroup<any>({});
  @Input() controlStart: FormControl = new FormControl<any>({});
  @Input() controlEnd: FormControl = new FormControl<any>({});

}
