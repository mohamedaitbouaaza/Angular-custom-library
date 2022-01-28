export class Constants {
  /* Amount Config */
  public static amountPattern = '1.2-5'; //{minIntegerDigits}.{minFractionDigits}-{maxFractionDigits}
  public static locale = 'fr-FR';
  /* Currency Config */
  public static currencyLocale = 'fr';
  public static currencyCode = 'MAD';
  /* Paginator Config */
  public static page = 1;
  public static pageSize = 10;
  public static maxSize = 5;
  /* Excel Config */
  public static excelFileTypes = '.xlsx';
  /* Date Config */
  public static datePattern = 'dd-MM-yyyy';
  public static datePattern2 = 'dd/MM/yyyy';
  public static minDate = new Date('0001-01-01T00:00:00.000Z');
}
