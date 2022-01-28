import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Constants } from '../shared/global-constants';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent {
  @Input() tableList: any;
  @Input() page: number;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();
  @Input() pageSize: number;
  @Output() pageSizeChange: EventEmitter<number> = new EventEmitter<number>();
  maxSize = Constants.maxSize;
  paginatorList = [10];

  setPaginatorSize() {
    if (this.tableList?.length <= 10) {
      this.paginatorList = [10];
    } else if (this.tableList?.length <= 15) {
      this.paginatorList = [10, 15];
    } else if (this.tableList?.length <= 20) {
      this.paginatorList = [10, 15, 20];
    } else {
      this.paginatorList = [10, 15, 20, 25];
    }
  }
  setItemsPerPage(pageNumber: number) {
    this.pageSize = pageNumber;
    this.pageSizeChange.emit(this.pageSize);
  }
  toogleEvent() {
    this.pageSizeChange.emit(this.pageSize);
    this.pageChange.emit(this.page);
  }
}
