import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[amountType],[amountCredit]',
})
export class AmountTypeDirective implements OnInit {
  @Input() amountType: number = 0;
  @Input() amountCredit: string = '';
  @Input() profitClass = 'profit';
  @Input() lossClass = 'loss';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.amountType) {
      if (this.amountType >= 0) {
        this.el.nativeElement.classList.add(this.profitClass);
        this.el.nativeElement.classList.remove(this.lossClass);
      } else if (this.amountType <= 0) {
        this.el.nativeElement.classList.add(this.lossClass);
        this.el.nativeElement.classList.remove(this.profitClass);
      } else {
        this.el.nativeElement.classList.remove(this.profitClass);
        this.el.nativeElement.classList.remove(this.lossClass);
      }
    }

    if (this.amountCredit) {
      if (this.amountCredit === 'C') {
        this.el.nativeElement.classList.add(this.profitClass);
        this.el.nativeElement.classList.remove(this.lossClass);
      } else if (this.amountCredit === 'D') {
        this.el.nativeElement.classList.add(this.lossClass);
        this.el.nativeElement.classList.remove(this.profitClass);
      } else {
        this.el.nativeElement.classList.remove(this.profitClass);
        this.el.nativeElement.classList.remove(this.lossClass);
      }
    }
  }
}
