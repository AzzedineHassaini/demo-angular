import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoTimerComponent } from './exo-timer/exo-timer.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import { ExoShoppingListComponent } from './exo-shopping-list/exo-shopping-list.component';
import { CartComponent } from './exo-shopping-list/cart/cart.component';
import {DemoModule} from "../demo/demo.module";


@NgModule({
  declarations: [
    ExoTimerComponent,
    ExoShoppingListComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    FormsModule,
    SharedModule,
    DemoModule
  ]
})
export class ExoModule { }
