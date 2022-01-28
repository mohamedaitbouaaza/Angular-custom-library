import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TableComponent } from './table/table.component';
import { CustomLibraryModule } from '../custom-library/custom-library.module';
import { TableRoutingModule } from './table.routing';

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    TableRoutingModule,
    CustomLibraryModule,
  ],
})
export class TableModuleModule {}
