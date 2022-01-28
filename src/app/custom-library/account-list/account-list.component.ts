import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import Utils from '../shared/utils';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss'],
})
export class AccountListComponent {
  @Input() listAccount: any;
  @Output() onSlideTrigger: EventEmitter<any> = new EventEmitter<any>();
  @Input() caro: any;
  @Output() caroChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() event: any;
  @Output() eventChange: EventEmitter<any> = new EventEmitter<any>();

  constructor(config: NgbCarouselConfig, public router: Router) {
    config.interval = 0;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  onSlide(event: any, caro: any) {
    this.caroChange.emit(caro);
    this.eventChange.emit(event);
    this.onSlideTrigger.emit(true);
  }
  /* To Export */
  stringToNumber(number: any): number {
    return Utils.toNumber(number);
  }
}
