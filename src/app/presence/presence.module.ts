import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresenceContainerComponent } from './components/presence-container/presence-container.component';
import { PresenceMonthComponent } from './components/presence-month/presence-month.component';
import { PresenceDayComponent } from './components/presence-day/presence-day.component';
import { PresenceRowComponent } from './components/presence-row/presence-row.component';
import { PresenceFormComponent } from './components/presence-form/presence-form.component';
import { PresenceDetailComponent } from './components/presence-detail/presence-detail.component';
import {PresenceRoutingModule} from "./presence-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {MatTooltipModule} from "@angular/material/tooltip";

@NgModule({
  declarations: [
    PresenceContainerComponent,
    PresenceMonthComponent,
    PresenceDayComponent,
    PresenceRowComponent,
    PresenceFormComponent,
    PresenceDetailComponent
  ],
    imports: [
        CommonModule,
        PresenceRoutingModule,
        ReactiveFormsModule,
        SharedModule,
        MatTooltipModule,
    ]
})
export class PresenceModule { }
