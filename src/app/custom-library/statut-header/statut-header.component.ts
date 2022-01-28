import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-statut-header',
  templateUrl: './statut-header.component.html',
  styleUrls: ['./statut-header.component.scss'],
})
export class StatutHeaderComponent {
  @Input() id: string;
  @Input() listToBeFiltred: any;
  @Output() listToBeFiltredChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() listToBeFiltredInitial: any[] = [];
  @Input() statusList: any[] = [];
  @Input() statusLabel: string;
  @Input() filterColumn: string;
  listFiltredByStatus: any[] = [];
  listOfStatus = [];
  count = 0;

  /* handle change event and filter the list by status */
  statutChange(event) {
    let elementId: string = (event.target as Element).id;
    this.count = 0;
    if (elementId != this.statusList[0].id) {
      this.changeCheckboxState(elementId);
      this.listFiltredByStatus = [];
      this.listToBeFiltredInitial.forEach((listItem) => {
        if (
          listItem[this.filterColumn] &&
          listItem[this.filterColumn] == event.target.value
        ) {
          this.listFiltredByStatus.push(listItem);
          this.count++;
        }
      });
      if (this.count > 0) {
        this.listToBeFiltred = this.listFiltredByStatus;
        this.listToBeFiltredChange.emit(this.listToBeFiltred);
      } else {
        this.listToBeFiltred = [];
        this.listToBeFiltredChange.emit(this.listToBeFiltred);
      }
    } else {
      this.changeCheckboxState(elementId);
      this.listToBeFiltred = this.listToBeFiltredInitial;
      this.listToBeFiltredChange.emit(this.listToBeFiltred);
    }
  }
  /* change the checkbox status of each element */
  changeCheckboxState(elementId: string) {
    // the first element of the list status must always be 'Tous'
    this.statusList[0].checked = true;
    this.statusList.forEach((element) => {
      if (element.id === elementId) {
        element.checked = true;
      } else {
        element.checked = false;
      }
    });
  }
  /*  handle status visibility : to hide the status that are not included in the Initial list */
  handleStatusVisibility() {
    // the first element of the list status must always be 'Tous'
    this.statusList[0].visibility = true;
    this.listOfStatus = [];
    this.listToBeFiltredInitial.forEach((listItem) => {
      this.listOfStatus.push(listItem[this.filterColumn]);
    });
    this.statusList.forEach((element) => {
      if (this.listOfStatus.indexOf(element.value) > -1) {
        element.visibility = true;
      } else {
        element.visibility = false;
        this.statusList[0].visibility = true;
      }
    });
  }
}
