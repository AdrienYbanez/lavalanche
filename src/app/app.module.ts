import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MY_FORMAT} from "./shared/environment/date-format";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMAT}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
