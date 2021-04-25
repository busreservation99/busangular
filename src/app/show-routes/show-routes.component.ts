import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-show-routes',
  templateUrl: './show-routes.component.html',
  styleUrls: ['./show-routes.component.css']
})
export class ShowRoutesComponent implements OnInit {

  constructor(private adminservice : AdminserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  busNumber:number;
  routeData:any;
  busData:any;
  busdest:any;
  fetchroute(){
    this.adminservice.fetchBusSource(this.busNumber).subscribe(data =>{
      this.busData=data;
    })
    this.adminservice.fetchBusDestination(this.busNumber).subscribe(data1 =>{
      this.busdest=data1;
    })
    this.adminservice.fetchroute(this.busNumber).subscribe(response =>{
        this.routeData=response;
    })
  }
}
