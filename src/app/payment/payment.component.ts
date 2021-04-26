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

  payments: Payment = new Payment();

  constructor(private paymentservice: PaymentService, private router: Router) { }

getPayments(){
  alert(JSON.stringify(this.payments));
    this.paymentservice.getPayments(this.payments).subscribe(response => {
      alert(JSON.stringify(response));
      if(response.status == true) {
        sessionStorage.setItem('paymentId', response.paymentId);
        this.router.navigate(['payment-confirmation']);
                            }
  

            })
       } 

}

