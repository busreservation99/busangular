import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-confirmation',
  templateUrl: './payment-confirmation.component.html',
  styleUrls: ['./payment-confirmation.component.css']
})
export class PaymentConfirmationComponent implements OnInit {

  paymentId:number;

  ngOnInit(): void {
    this.paymentId = parseInt(sessionStorage.getItem('paymentId'));
  }
  
}
