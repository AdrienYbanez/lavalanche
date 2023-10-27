import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from "./shared/shared.module";
import {MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MY_FORMAT} from "./shared/environment/date-format";

import {environment} from "../environments/environment";
import {LuxonModule} from "luxon-angular";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {LoginComponent} from "./auth/components/login/login/login.component";
import {ReactiveFormsModule} from "@angular/forms";
import { provideAuth,getAuth } from '@angular/fire/auth';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
import {FirebaseUIModule} from "firebaseui-angular";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideFirestore(() => getFirestore()),
    LuxonModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule

  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMAT}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
