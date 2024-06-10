import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoTimerComponent } from './exo-timer/exo-timer.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    ExoTimerComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ExoModule { }
