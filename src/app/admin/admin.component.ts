import { Component, OnInit } from '@angular/core';
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
   this.fetchAllBusDetails();
   this.scheduleId=parseInt(sessionStorage.getItem('scheduleId'))
  }

isShown: boolean = false ; 
toggleShow() {

this.isShown = ! this.isShown;

}
isShown1: boolean = false ; 
toggleShow1() {

this.isShown1 = ! this.isShown1;

}
isShown2: boolean = false ; 
toggleShow2() {

this.isShown2 = ! this.isShown2;

}
isShown3: boolean = false ; 
toggleShow3() {

this.isShown3 = ! this.isShown3;

}
isShown4: boolean = false ; 
toggleShow4() {

this.isShown4 = ! this.isShown4;

}
 
  busSeatStatus : BusSeatStatus = new BusSeatStatus();

  busSeat : BusSeat = new BusSeat();
  scheduleId:any;

  route:Route=new Route();

  schedule:Schedule=new Schedule();

  bus:Bus = new Bus();

  
  messagebus:string;
  messageroute:string;
  messageschedule:string;
  messageseat: string;
  constructor(private adminservice : AdminserviceService ) { }

  addbus(){
    this.adminservice.addbus(this.bus).subscribe(data =>{
    //  this.bus.busNumber=parseInt(sessionStorage.setItem('busnumber',data.busNumber));
     // alert(JSON.stringify(data));
      this.messagebus=data['message'];

    })
  }
  addroute(){
    this.adminservice.addroute(this.route).subscribe(response =>{
    // this.route.bus.busNumber=parseInt(sessionStorage.getItem('busNumber'));
     // alert(JSON.stringify(response))
      this.messageroute=response['message'];
    })
  }

  addseat(){
    this.adminservice.addseats(this.busSeatStatus).subscribe(response =>{
     alert(JSON.stringify(response))
      this.messageseat=response['message'];
    })
  }

  addschedule(){
    this.adminservice.addschedule(this.schedule).subscribe(data =>{ 
    // alert(JSON.stringify(data));
    sessionStorage.setItem('scheduleId',data.scheduleId);
      this.messageschedule=data['message'];
    })
  }

  fetchAllBusDetails(){
    this.adminservice.fetch().subscribe(response => {
      this.busdetail.push(response);
      console.log(this.busdetail)
    })
  }

}




