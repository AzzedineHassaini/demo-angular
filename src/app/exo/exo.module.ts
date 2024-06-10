import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoTimerComponent } from './exo-timer/exo-timer.component';


@NgModule({
  declarations: [
    ExoTimerComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule
  ]
})
export class ExoModule { }
