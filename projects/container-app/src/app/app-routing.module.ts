import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
  },
  {
    path: "insurance-details",
    loadChildren: () => import("mfe-insurance-details/InsuranceDetailsModule").then(m => m.InsuranceDetailsModule)
  },
  {
    path: "pay-premium",
    loadChildren: () => import("mfe-pay-premium/PayPremiumModule").then(m => m.PayPremiumModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
