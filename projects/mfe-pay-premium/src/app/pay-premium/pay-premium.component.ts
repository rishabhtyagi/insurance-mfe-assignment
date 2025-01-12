import { Component } from '@angular/core';

@Component({
  selector: 'app-pay-premium',
  templateUrl: './pay-premium.component.html',
  styleUrls: ['./pay-premium.component.scss']
})
export class PayPremiumComponent {
  amount: number | null = null;
  discountOptions = [0.1, 0.2, 0.3]; // Discount options: 10%, 20%, 30%
  selectedDiscount: number | null = null;
  discountedAmount: number | null = null;
  isLoading = false;
  errorMessage: string | null = null;

  constructor() {}

  calculateDiscount() {
    this.errorMessage = null; // Reset error message
    if (this.amount === null || this.amount <= 0) {
      this.errorMessage = 'Please enter a valid amount greater than 0.';
      return;
    }

    if (this.selectedDiscount === null) {
      this.errorMessage = 'Please select a discount.';
      return;
    }

    this.isLoading = true;
    const worker = new Worker(
      new URL('./discount-calculator.worker', import.meta.url)
    );
    worker.onmessage = ({ data }) => {
      this.discountedAmount = data.discountedAmount;
      this.isLoading = false; // Stop loader
    };
    worker.onerror = () => {
      this.errorMessage = 'Something went wrong while calculating the discount.';
      this.isLoading = false;
    };
    worker.postMessage({ amount: this.amount, discount: this.selectedDiscount });
  }
}
