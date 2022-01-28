import { DatePipe } from '@angular/common';

export default class Utils {
  /**
   * @param date
   * @param format
   * @returns Format date
   */
  static getFormatedDate(date: Date, format: string) {
    const datePipe = new DatePipe('en-US');
    return datePipe.transform(date, format);
  }
  /**
   * @param date
   * @param format
   * @returns Format number
   */
  static numberWithSpaces(x) {
    x = x.toString().replace(/\s/g, '');
    x = x.toString().replace('.', ',');
    var parts = x.toString().split(',');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    return parts.join(',');
  }
  /**
   * @param date
   * @param format
   * @returns Format number Two
   */
  static formatNumberElements(numberElement: any) {
    if (numberElement == null || numberElement == undefined) {
      return;
    } else {
      var enterNumber = numberElement;
      enterNumber = enterNumber.toString().replace(/\s/g, '');
      var replaceComa = enterNumber.replace(',', '.');
      var resultElement = Number(replaceComa);
      return resultElement;
    }
  }
  /**
   * @param date
   * @param format
   * @returns Format elements
   */
  static formatStringElements(stringElement: any) {
    stringElement = stringElement?.toString()?.trim()?.toLowerCase();
    return stringElement;
  }
  /**
   *
   * @param date
   * @returns check on valid date elements
   */
  static isValidDate(date) {
    var regexp = new RegExp(
      '(19|20)[0-9][0-9]-(0[0-9]|1[0-2])-(0[1-9]|([12][0-9]|3[01]))T([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]'
    );
    return regexp.exec(date);
  }
  /**
   * @param date
   * @param format
   * @returns Format number
   */
  static toNumber(number: any) {
    if (number == null || number == undefined) {
      return 0;
    } else {
      number = number?.toString()?.replace(/\s/g, '');
      number = number?.toString()?.replace(',', '.');
      return Number(number);
    }
  }
}
