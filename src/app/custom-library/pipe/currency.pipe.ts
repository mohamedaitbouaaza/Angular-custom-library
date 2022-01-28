import { formatCurrency, getCurrencySymbol } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

import { Constants } from '../shared/global-constants';

@Pipe({
  name: 'currencyFormatter',
})
export class CurrencyPipe implements PipeTransform {
  amountPattern = Constants.amountPattern;
  amountLocale = Constants.currencyLocale;
  currencyCode = Constants.currencyCode;

  transform(
    value: number,
    currencyCode: string = this.currencyCode,
    display: 'code' | 'symbol' | 'symbol-narrow' | string | boolean = 'symbol',
    digitsInfo: string = this.amountPattern,
    locale: string = this.amountLocale
  ): string | null {
    return formatCurrency(
      value,
      locale,
      getCurrencySymbol(currencyCode, 'wide'),
      currencyCode,
      digitsInfo
    );
  }
}
