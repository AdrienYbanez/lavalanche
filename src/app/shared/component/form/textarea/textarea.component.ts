import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent {
  @Input() label?: string;
  @Input() form: FormGroup = new FormGroup<any>({});
  @Input() control: FormControl = new FormControl<any>({});
}
