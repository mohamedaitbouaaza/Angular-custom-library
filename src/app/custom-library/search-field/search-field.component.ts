import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

import Utils from '../shared/utils';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
})
export class SearchFieldComponent implements OnChanges {
  @Input() id: string;
  @Input() listToBeFiltred: any;
  @Output() listToBeFiltredChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() listToBeFiltredInitial: any[] = [];
  @Input() listOfFilterColumn: any[] = [];
  @Input() searchValue: string = '';
  @Output() searchValueChange: EventEmitter<string> =
    new EventEmitter<string>();
  listFromSearch = [];
  @Output() stateChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  /* detect changes and notif the parent component */
  ngOnChanges() {
    this.stateChange.emit(true);
  }
  /* search on the input list with the searchValue */
  onSearch(searchValue: string) {
    this.searchValue = searchValue;
    this.listToBeFiltred = this.filterColumn(
      this.listOfFilterColumn,
      this.listToBeFiltred,
      this.listToBeFiltredInitial,
      searchValue
    );
    this.listToBeFiltredChange.emit(this.listToBeFiltred);
    this.searchValueChange.emit(this.searchValue);
  }
  /* filtring elements of a table by multiple fields */
  filterColumn(
    listOfcolumn: any,
    listToBeFiltered: any,
    listInitial: any,
    searchValue: string
  ) {
    this.listFromSearch = [];
    if (searchValue === '') {
      listToBeFiltered = listInitial;
    } else {
      listToBeFiltered.forEach((element: { [x: string]: string }) => {
        for (let i = 0; i <= listOfcolumn.length - 1; i++) {
          if (
            (isNaN(+element[listOfcolumn[i]])
              ? Utils.formatStringElements(element[listOfcolumn[i]])
                  ?.toString()
                  ?.includes(Utils.formatStringElements(searchValue))
              : Utils.formatNumberElements(element[listOfcolumn[i]]) ===
                Utils.formatNumberElements(searchValue)) ||
            (isNaN(+element[listOfcolumn[i + 1]])
              ? Utils.formatStringElements(element[listOfcolumn[i + 1]])
                  ?.toString()
                  ?.includes(Utils.formatStringElements(searchValue))
              : Utils.formatNumberElements(
                  element[listOfcolumn[i + 1]]
                ) === Utils.formatNumberElements(searchValue))
          ) {
            i += 1;
            this.listFromSearch.push(element);
          }
        }
      });
      listToBeFiltered = [];
      listToBeFiltered = this.listFromSearch;
    }
    return listToBeFiltered;
  }
}
