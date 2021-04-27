import { FinalBookingService } from './../final-booking.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Payment } from '../appmodel/payment';
import { PaymentService } from '../payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent  {
  amount;
  payments: Payment = new Payment();
  seats;

  constructor(private paymentservice: PaymentService, private router: Router, private service:FinalBookingService) { 
this.amount=sessionStorage.getItem('totalPrice');
this.seats=sessionStorage.getItem('totalSeats');
this.payments.amount=this.amount;
  }

getPayments(){
  alert(JSON.stringify(this.payments));
  
  this.paymentservice.getPayments(this.payments).subscribe(response => {
      alert(JSON.stringify(response));
      if(response.status == true) {
        sessionStorage.setItem('paymentId', response.paymentId);
        this.service.mainService();  
        this.router.navigate(['payment-confirmation']);
                            }
              })
       } 

}

