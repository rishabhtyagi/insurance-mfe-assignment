import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PayPremiumComponent } from './pay-premium/pay-premium.component';

const routes: Routes = [
  {path:"", redirectTo: "pay-premium", pathMatch: "full"},
  {path:"pay-premium", component: PayPremiumComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
