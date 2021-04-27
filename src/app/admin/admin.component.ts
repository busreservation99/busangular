import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminserviceService } from '../adminservice.service';
import { Bus } from '../appmodel/Bus';
import { BusDetail } from '../appmodel/BusDetails';
import { BusSeat } from '../appmodel/BusSeat';
import { BusSeatStatus } from '../appmodel/BusSeatStatus';
import { Route } from '../appmodel/Route';
import { Schedule } from '../appmodel/Schedule';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  
  busdetail: Array<BusDetail> = new Array();


  ngOnInit(): void {
   this.scheduleId=parseInt(sessionStorage.getItem('scheduleId'))
  }
  showallbuses(){
    this.router.navigate(['admin-show-buses'])
  }
 
busdata:any;
 
  busSeatStatus : BusSeatStatus = new BusSeatStatus();

  busSeat : BusSeat = new BusSeat();
  scheduleId:any;

  route:Route=new Route();

  schedule:Schedule=new Schedule();

  bus:Bus = new Bus();
  busNumber:number;
  
  messagebus:string;
  messageroute:string;
  messageschedule:string;
  messageseat: string;
  constructor(private adminservice : AdminserviceService,private router: Router) { }

  showanalytics(){
    this.router.navigate(['admin-analytics']);
  }
  showroutes(){
    this.router.navigate(['admin-routes']);
  }
  showschedule(){
    this.router.navigate(['admin-schedule']);
  }

  addbus(){
    this.adminservice.addbus(this.bus).subscribe(data =>{
     sessionStorage.getItem('busNumber');
     // alert(JSON.stringify(data));
     // this.messagebus=data['message'];
      alert(JSON.stringify(data['message']));

    })
  }
  addroute(){
    this.adminservice.addroute(this.route).subscribe(response =>{
    // this.route.bus.busNumber=parseInt(sessionStorage.getItem('busNumber'));
     // alert(JSON.stringify(response))
     // this.messageroute=response['message'];
     alert(JSON.stringify(response['message']))
    })
  }

  addseat(){
    this.adminservice.addseats(this.busSeatStatus).subscribe(response =>{
    //  alert(JSON.stringify(response))
      //this.messageseat=response['message'];
      alert(JSON.stringify(response['message']))
    })
  }

  addschedule(){
    this.adminservice.addschedule(this.schedule).subscribe(data =>{ 
    // alert(JSON.stringify(data));
    sessionStorage.setItem('scheduleId',data.scheduleId);
      //this.messageschedule=data['message'];
      alert(JSON.stringify(data['message']))
      alert(JSON.stringify(data['scheduleId']))
    })
  }


}




