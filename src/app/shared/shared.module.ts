import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from "@angular/router";
import { DateRangePickerComponent } from './component/form/date-range-picker/date-range-picker.component';
import { DatePickerComponent } from './component/form/date-picker/date-picker.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatNativeDateModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { InputFullWidthComponent } from './component/form/input-full-width/input-full-width.component';
import { TextareaComponent } from './component/form/textarea/textarea.component';
import { RaisedButtonComponent } from './component/button/raised-button/raised-button.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { BaseComponent } from './component/base/base.component';
import { LoginIllustrationComponent } from './component/illustrations/login-illustration/login-illustration.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    HeaderComponent,
    DateRangePickerComponent,
    DatePickerComponent,
    InputFullWidthComponent,
    TextareaComponent,
    RaisedButtonComponent,
    BaseComponent,
    LoginIllustrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ],
  exports: [
    HeaderComponent,
    DateRangePickerComponent,
    DatePickerComponent,
    InputFullWidthComponent,
    TextareaComponent,
    RaisedButtonComponent,
    LoginIllustrationComponent,
    MatButtonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
