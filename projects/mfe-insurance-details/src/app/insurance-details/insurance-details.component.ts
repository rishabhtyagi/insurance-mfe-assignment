import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../services/policy.service';

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrls: ['./insurance-details.component.scss']
})
export class InsuranceDetailsComponent implements OnInit {
  policyDetails: { policyName: string; premiumAmount: number } = {
    policyName: 'Life Cover Premium',
    premiumAmount: 5000,
  };

  constructor(private policyService: PolicyService) {}

  ngOnInit(): void {
    const storedPolicy = localStorage.getItem('policyDetails');
    if (storedPolicy) {
      this.policyDetails = JSON.parse(storedPolicy);
    }
  }

  updatePolicyDetails() {
    this.policyService.setPolicyDetails(this.policyDetails);
  }
}
