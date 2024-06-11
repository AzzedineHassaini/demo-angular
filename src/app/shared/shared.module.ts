import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';
import { TimerPipe } from './pipes/timer.pipe';



@NgModule({
  declarations: [
    CustomCurrencyPipe,
    TimerPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    CustomCurrencyPipe,
    TimerPipe
  ]
})
export class SharedModule {

}
