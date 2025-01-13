import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsuranceDetailsComponent } from './insurance-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InsuranceDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: "", component: InsuranceDetailsComponent, pathMatch: "full"}
    ])
  ]
})
export class InsuranceDetailsModule { }
