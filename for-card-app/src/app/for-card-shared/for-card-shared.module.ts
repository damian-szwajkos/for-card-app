import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormGroupComponent } from './components/form-group/form-group.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { HomeComponent } from './components/home/home.component';
import {CardNumberPipe} from './services/card-number.pipe';
import {DatePipe, DateTimePipe, PaymentCardDatePipe} from './services/date.pipe';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { PaymentCardComponent } from './components/payment-card/payment-card.component';
import { PaymentCardFormComponent } from './components/payment-card/payment-card-form/payment-card-form.component';

@NgModule({
  declarations: [
    FormGroupComponent,
    LoadingSpinnerComponent,
    HomeComponent,
    CardNumberPipe,
    DatePipe,
    DateTimePipe,
    PaymentCardDatePipe,
    UserProfileComponent,
    PaymentCardComponent,
    PaymentCardFormComponent
  ],
  exports: [
    CardNumberPipe,
    DatePipe,
    DateTimePipe,
    PaymentCardDatePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [

  ]
})

export class ForCardSharedModule {
}
