import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PayPremiumModule } from './pay-premium/pay-premium.module';
//import { PayPremiumComponent } from './pay-premium/pay-premium.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PayPremiumModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
