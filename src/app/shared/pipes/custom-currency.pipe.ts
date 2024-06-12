import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCurrency'
})
export class CustomCurrencyPipe implements PipeTransform {

  transform(amount: number, unit : 'EUR' | 'US' = 'EUR'): string {

    // return amount/100 + (unit === 'EUR' ? ' €' : ' $');
    return amount + (unit === 'EUR' ? ' €' : ' $');
  }

}
