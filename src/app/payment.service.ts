import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Payment } from './appmodel/Payment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http: HttpClient) { }



  getPayments(payments : Payment) : Observable<any> {
  let url = "http://localhost:8181/addPayment";
  return this.http.post(url, payments);
  }
  }
  
  

