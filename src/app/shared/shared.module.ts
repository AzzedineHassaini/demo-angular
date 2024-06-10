import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CustomCurrencyPipe } from './pipes/custom-currency.pipe';



@NgModule({
  declarations: [
    CustomCurrencyPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule,
    CustomCurrencyPipe
  ]
})
export class SharedModule { }
