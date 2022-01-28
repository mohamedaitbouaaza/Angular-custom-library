import { Component, Input } from '@angular/core';

import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

import { Constants } from '../shared/global-constants';
import Utils from '../shared/utils';

@Component({
  selector: 'app-export-file',
  templateUrl: './export-file.component.html',
  styleUrls: ['./export-file.component.scss'],
})
export class ExportFileComponent {
  @Input() id: string | undefined;
  @Input()
  downloadExcelVisibility: boolean = true;
  @Input()
  downloadPdfVisibility: boolean = true;
  @Input() listToBeExported: any[] = [];
  @Input() listOfExportedColumn: any[] = [];
  @Input() fileHead: any[] = [];
  @Input() fileName: string = '';
  data = [];
  dataObject = [];
  datePattern = Constants.datePattern;
  excelType = Constants.excelFileTypes;

  /*  get data from input list to be exported */
  getData() {
    this.data = [];
    this.listToBeExported.forEach((element) => {
      let index = 0;
      this.dataObject = [];
      this.listOfExportedColumn.forEach((headElement) => {
        var item;
        if (!element[headElement] || element[headElement] == null) {
          item = '';
          this.dataObject[index] = item;
          index++;
        } else {
          if (Utils.isValidDate(element[headElement])) {
            item = Utils.getFormatedDate(
              element[headElement],
              this.datePattern
            );
          } else if (!isNaN(+element[headElement])) {
            item = Utils.numberWithSpaces(element[headElement]);
          } else {
            item = element[headElement];
          }
          this.dataObject[index] = item;
          index++;
        }
      });
      this.data.push(this.dataObject);
    });
    return this.data;
  }
  /* export data into pdf format */
  getPdfFile() {
    var doc = new jsPDF();
    doc.setFontSize(20);
    doc.setTextColor(100);
    doc.text(this.fileName, 70, 20);
    (doc as any).autoTable({
      startY: 35,
      margin: 7,
      head: this.fileHead,
      body: this.getData(),
      didParseCell: function (table) {
        if (table.section === 'head') {
          table.cell.styles.fillColor = '#628B18';
        }
      },
    });
    this.addFooters(doc);
    doc.save(this.fileName);
  }
  /* export data into excel format */
  getExcelFile() {
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.getData());
    XLSX.utils.sheet_add_aoa(ws, this.fileHead);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, this.fileName + this.excelType);
  }
  /* add footer to the pdf file */
  addFooters(doc) {
    const pageCount = doc.internal.getNumberOfPages();
    for (var i = 1; i <= pageCount; i++) {
      doc.setFontSize(15);
      doc.setPage(i);
      doc.text(String(i) + '/' + doc.internal.getNumberOfPages(), 99, 285, {
        styles: { fontSize: 15 },
      });
    }
  }
}
