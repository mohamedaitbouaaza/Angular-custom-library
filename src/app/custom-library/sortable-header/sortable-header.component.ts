import { Component, EventEmitter, Input, Output } from '@angular/core';

import Utils from '../shared/utils';

@Component({
  selector: 'app-sortable-header',
  templateUrl: './sortable-header.component.html',
  styleUrls: ['./sortable-header.component.scss'],
})
export class SortableHeaderComponent {
  @Input() id: string;
  @Input() listToBeSorted: any;
  @Output() listToBeSortedChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() columnName: string;
  @Input() defaultOrder: boolean = false; // default order is descending
  @Input() headerTitle: string;
  sortArrowFlag = false;

  /* sorting column of table ascending/descending */
  sortColumnHeader() {
    this.sortArrowFlag = !this.sortArrowFlag;
    this.listToBeSorted = this.sortTable(this.columnName, this.listToBeSorted);
    this.listToBeSortedChange.emit(this.listToBeSorted);
  }
  /**
   *
   * @param colName
   * @param listToBeSorted
   * @returns sorting column of table ascending/descending
   */
  sortTable(colName: string, listToBeSorted: any) {
    if (this.defaultOrder) {
      listToBeSorted.sort((a, b) =>
        this.checkAmount(a[colName]) < this.checkAmount(b[colName])
          ? 1
          : this.checkAmount(a[colName]) > this.checkAmount(b[colName])
          ? -1
          : 0
      );
      this.defaultOrder = !this.defaultOrder;
    } else {
      listToBeSorted.sort((a, b) =>
        this.checkAmount(a[colName]) > this.checkAmount(b[colName])
          ? 1
          : this.checkAmount(a[colName]) < this.checkAmount(b[colName])
          ? -1
          : 0
      );
      this.defaultOrder = !this.defaultOrder;
    }
    return listToBeSorted;
  }
  /**
   *
   * @param value
   * @returns handling the case of Amount column (comparing negative values and string inputs)
   */
  checkAmount(value: string) {
    return !isNaN(+value)
      ? parseFloat(Utils.toNumber(value).toString())
      : value;
  }
}
