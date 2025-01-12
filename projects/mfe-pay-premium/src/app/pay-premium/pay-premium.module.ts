import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayPremiumComponent } from './pay-premium.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PayPremiumComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(
      [
        {path: "", component: PayPremiumComponent, pathMatch: "full"}
      ]
    )
  ]
})
export class PayPremiumModule { }
