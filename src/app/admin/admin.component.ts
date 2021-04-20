import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminserviceService } from '../adminservice.service';
import { Bus } from '../appmodel/Bus';
import { Route } from '../appmodel/Route';
import { Schedule } from '../appmodel/Schedule';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent  {
  
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

  addschedule(){
    this.adminservice.addschedule(this.schedule).subscribe(data =>{ 
    // alert(JSON.stringify(data));
      this.messageschedule=data['message'];
    })
  }

 



}




