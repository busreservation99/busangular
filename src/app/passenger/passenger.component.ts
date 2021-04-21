import { Passenger } from './../appmodel/Passenger';
import { Component, OnInit } from '@angular/core';
import { Passengers } from '../appmodel/Passengers';

import { PassengerService } from '../passenger-service.service';

@Component({
  selector: 'passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent {

  message:string;

  passenger:Passenger = new Passenger();
 

  passengers:Passengers= new Passengers();

  constructor(private service:PassengerService){
    
  }
  // addPassenger(){
  //   this.passenger.busSeat.seatId=263;
  //   this.passenger.booking.id=230;
  //   this.passengers.passengers.push(this.passenger);
  //  this.service.savePassenger(this.passengers).subscribe(data =>{
  //   alert(JSON.stringify(data));
  //   console.log(data);
  //   this.message=data['message'];
  //   this.passengers.passengers=[];
  //  })
  // }

  addPassenger(){
    this.passenger.busSeat.seatId=263;
    this.passenger.booking.id=230;
    this.passengers.passengers.push(this.passenger);
    this.passenger=new Passenger();
  }
  
addAllPassengers(){

    // this.passengers.passengers.push(this.passenger);
   this.service.savePassenger(this.passengers).subscribe(data =>{
    alert(JSON.stringify(data));
    console.log(data);
    this.message=data['message'];
    this.passengers.passengers=[];
   })
}
 }




