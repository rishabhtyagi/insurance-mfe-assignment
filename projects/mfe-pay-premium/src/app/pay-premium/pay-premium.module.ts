import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayPremiumComponent } from './pay-premium.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PayPremiumComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(
      [
        {path: "", component: PayPremiumComponent, pathMatch: "full"}
      ]
    )
  ]
})
export class PayPremiumModule { }
