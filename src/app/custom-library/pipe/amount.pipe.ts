import { Pipe, PipeTransform } from '@angular/core';
import { formatNumber } from '@angular/common';

import { Constants } from '../shared/global-constants';
import Utils from '../shared/utils';

@Pipe({
  name: 'amountFormatter',
})
export class AmountPipe implements PipeTransform {
  amountPattern = Constants.amountPattern;
  amountLocale = Constants.locale;

  transform(
    value: number,
    amountPattern: string = this.amountPattern,
    amountLocale: string = this.amountLocale
  ): string {
    var formattedNumber = Utils.toNumber(value);
    return formatNumber(formattedNumber, amountLocale, amountPattern);
  }
}
