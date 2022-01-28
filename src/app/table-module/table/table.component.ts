import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TablePage } from './models/table-page';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  pageObject: TablePage = new TablePage();
  page = this.pageObject.pageConstant.page;
  pageSize = this.pageObject.pageConstant.pageSize;
  caro: any;
  sliderEvent: any;
  searchValue: string;

  constructor(private router: Router) {}

  /* On slide event */
  onSlide(event, caro) {
    caro.next();
  }
  /* Navigate to Home page */
  return() {
    this.router.navigateByUrl('/details');
    this.loadScript('../../../assets/js/custom.js');
  }
  /* Load scripts after navigating */
  loadScript(url: string) {
    const body = <HTMLDivElement>document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }
}
