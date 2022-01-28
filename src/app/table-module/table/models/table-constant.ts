import { Constants } from 'src/app/custom-library/shared/global-constants';

export class TableConstant {
  /* Search Field */
  listOfFilterColumn = ['amount', 'label'];
  /* Export File */
  listOfExportedColumn = ['statusLabel', 'date', 'amount', 'label'];
  fileHeader = [['Status', 'Date', 'Amount', 'Label']];
  fileName = ['Exported_file'];
  /* Status Filter */
  // $localize`:@@deal.detail.beneficiary.notDeclared:Non déclaré`,
  statusList: any[] = [
    {
      id: 'checkedTous',
      value: '',
      name: 'Tous',
      visbility: true,
      checked: true,
    },
    {
      id: 'checkedValide',
      value: 1,
      name: 'Valide',
      visbility: false,
      checked: false,
    },
    {
      id: 'checkedInValide',
      value: 2,
      name: 'Invalide',
      visbility: false,
      checked: false,
    },
  ];
  statusLabel = 'Status';
  statusFilterColumn = 'statusCode';
  /* Headers Sort */
  firstHeaderTitle = 'Date';
  firstHeaderColumn = 'date';
  secondHeaderTitle = 'Amount';
  secondHeaderColumn = 'amount';
  thirdHeaderTitle = 'Label';
  thirdHeaderColumn = 'label';
  /* General Constants */
  dateFormat = Constants.datePattern;
  page = Constants.page;
  pageSize = Constants.pageSize;
}
