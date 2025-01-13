// declare.d.ts in mfe-pay-premium
declare module 'mfe-insurance-details/PolicyService' {
  export class PolicyService {
    static getPolicyDetails(): {
      
      policyName: string;
      premiumAmount: number;
    };
  }
}
