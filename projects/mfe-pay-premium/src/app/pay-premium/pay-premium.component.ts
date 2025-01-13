import { Component } from '@angular/core';


@Component({
  selector: 'app-pay-premium',
  templateUrl: './pay-premium.component.html',
  styleUrls: ['./pay-premium.component.scss']
})
export class PayPremiumComponent {
  amount: number = 0;
  selectedPaymentOption: string | null = null;
  selectedDiscount: number | null = null;
  finalPayableAmount: number | null = null;

  // Declare the policyDetails property
  policyDetails: { policyName: string; premiumAmount: number;} | null = null;

  paymentOptions = [
    { name: 'Wallet', discount: 0.1 }, // 10% discount
    { name: 'UPI', discount: 0.05 },   // 5% discount
    { name: 'Net Banking', discount: 0 }, // No discount
    { name: 'Credit Card', discount: -0.02 } // 2% surcharge
  ];

  constructor() {}

  displayDiscount() {
    const selectedOption = this.paymentOptions.find(
      option => option.name === this.selectedPaymentOption
    );
    this.selectedDiscount = selectedOption ? selectedOption.discount : null;
  }

  async ngOnInit() {
    


    // Dynamically import PolicyService from mfe-insurance-details and load policy details
    try {
      const { PolicyService } = await import('mfe-insurance-details/PolicyService');
      this.policyDetails = await PolicyService.getPolicyDetails(); // Assuming the method to get policy details
    } catch (error) {
      console.error('Error loading remote service, falling back to localStorage', error);
      // Fallback to localStorage or other appropriate error handling logic
    }
  }

  async calculateFinalAmount() {
    if (this.selectedPaymentOption === null) return;

    const selectedOption = this.paymentOptions.find(
      option => option.name === this.selectedPaymentOption
    );

    if (!selectedOption) return;

    
    try {
      const worker = new Worker(
        new URL('./discount-calculator.worker', import.meta.url)
      );
      
      worker.onmessage = ({ data }) => {
        this.finalPayableAmount = data.finalAmount;
      };

      worker.postMessage({
        amount: this.amount,
        discount: selectedOption.discount
      });

      
    } catch (error) {
      this.finalPayableAmount = this.amount - this.amount * selectedOption.discount;
    }
  }

  // Helper method for absolute value
  getAbsoluteValue(value: number): number {
    return Math.abs(value);
  }
}
