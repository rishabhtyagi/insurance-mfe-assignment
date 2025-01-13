import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private policyDetails = {
    policyName: 'Life Cover Premium',
    premiumAmount: 5000,
  };

  // Get policy details
  getPolicyDetails() {
    return this.policyDetails;
  }

  // Set policy details (if needed)
  setPolicyDetails(details: { policyName: string; premiumAmount: number }) {
    this.policyDetails = details;
    localStorage.setItem('policyDetails', JSON.stringify(details)); // Store in localStorage
  }
}
