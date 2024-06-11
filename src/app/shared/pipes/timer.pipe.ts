import {Pipe, PipeTransform} from '@angular/core';
import {DecimalPipe} from "@angular/common";

@Pipe({
  name: 'timer'
})
export class TimerPipe implements PipeTransform {

  // constructor(private _decimalPipe: DecimalPipe) {}

  transform(value: number): string {

    const seconds = Math.floor(value % 60);
    const minutes = Math.floor((value / 60) % 60);
    const hours = Math.floor(value / 3600);

    // return this.transformDecimal(hours,2) + 'h:'
    //      + this.transformDecimal(minutes,2) + 'm:'
    //      + this.transformDecimal(seconds,2) + 's';

    return this.formatNumber(hours, 2) + 'h:'
      + this.formatNumber(minutes, 2) + 'm:'
      + this.formatNumber(seconds, 2) + 's';
  }

  // transformDecimal(value: number, minIntegerDigits: number, minFractionDigits: number = 0, maxFractionDigits: number = 0) {
  //   return this._decimalPipe.transform(value, minIntegerDigits+'.'+minFractionDigits+'-'+maxFractionDigits);
  // }

  private formatNumber(num: number, minIntegerDigits: number): string {
    return num.toString().padStart(minIntegerDigits, '0');
  }

}
