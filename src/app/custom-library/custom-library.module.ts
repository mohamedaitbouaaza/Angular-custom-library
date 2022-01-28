import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SearchFieldComponent } from './search-field/search-field.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ExportFileComponent } from './export-file/export-file.component';
import { SortableHeaderComponent } from './sortable-header/sortable-header.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AmountTypeDirective } from './directive/amount-type.directive';
import { AmountPipe } from './pipe/amount.pipe';
import { MoveNextByMaxDirective } from './directive/move-next-by-max.directive';
import { NumberOnlyDirective } from './directive/number-only.directive';
import { CurrencyPipe } from './pipe/currency.pipe';
import { StatutHeaderComponent } from './statut-header/statut-header.component';

@NgModule({
  declarations: [
    SearchFieldComponent,
    PaginatorComponent,
    ExportFileComponent,
    SortableHeaderComponent,
    AccountListComponent,
    AmountTypeDirective,
    MoveNextByMaxDirective,
    NumberOnlyDirective,
    AmountPipe,
    CurrencyPipe,
    StatutHeaderComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgbModule],
  exports: [
    SearchFieldComponent,
    PaginatorComponent,
    ExportFileComponent,
    SortableHeaderComponent,
    AccountListComponent,
    StatutHeaderComponent,
    AmountTypeDirective,
    MoveNextByMaxDirective,
    NumberOnlyDirective,
    AmountPipe,
    CurrencyPipe,
  ],
})
export class CustomLibraryModule {}
