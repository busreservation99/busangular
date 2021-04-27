import { Component, OnInit } from '@angular/core';
import { Payment } from '../appmodel/Payment';
import { AdminserviceService } from '../adminservice.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private adminservice : AdminserviceService) { }

  ngOnInit(): void {
    this.fetchAmount();
    this.fetchCustomerCount();
    this.fetchTotalBus();
  }
  payment: Object;
  customerCount : Object;
  totalBus:object;
  
  fetchAmount(){
    this.adminservice.fetchAmount().subscribe(data =>{
      this.payment=data
     // console.log(this.payment)
    })
  }

  fetchCustomerCount(){
    this.adminservice.fetchRegisterCount().subscribe(data1 =>{
      this.customerCount=data1;
    })
  }

  fetchTotalBus(){
    this.adminservice.fetchTotalBus().subscribe(data2 =>{
      this.totalBus=data2;
    })
  }
}
