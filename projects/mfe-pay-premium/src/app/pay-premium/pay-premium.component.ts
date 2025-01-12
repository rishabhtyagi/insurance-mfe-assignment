import { Component } from '@angular/core';


@Component({
  selector: 'app-pay-premium',
  templateUrl: './pay-premium.component.html',
  styleUrls: ['./pay-premium.component.scss']
})
export class PayPremiumComponent {
  amount: number = 0;
  discount: number | null = null;
  discountedAmount: number | null = null;

  constructor() {}

  calculateDiscount() {
    const worker = new Worker(
      new URL('./discount-calculator.worker', import.meta.url)
    );
    worker.onmessage = ({ data }) => {
      this.discount = data.discount;
      this.discountedAmount = data.discountedAmount;
    };
    worker.postMessage(this.amount);
  }
  

}
