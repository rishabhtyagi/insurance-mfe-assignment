import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';

const routes: Routes = [
  {path: "", redirectTo: "insurance-details", pathMatch: "full"},
  {path: "insurance-details", component: InsuranceDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
