import { Passenger } from './../appmodel/Passenger';
import { Component, OnInit } from '@angular/core';
import { Passengers } from '../appmodel/Passengers';
import { PassengerService } from '../passenger-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent{

  message:string;
  passenger:Passenger = new Passenger();
  //passengers:Passengers= new Passengers();
  //passengers: Array<Passenger> = new Array();

  userForm:FormGroup;
  passengers:any;
  
  
  constructor(private fb:FormBuilder,private service:PassengerService, private router: Router){
    this.passengers=[];
    
    this.userForm = this.fb.group({
      name: ['',Validators.required],
      phoneNumber: ['',Validators.required],
      email:['',Validators.required]
    })
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

  /*addPassenger(){
    this.passenger.busSeat.seatId=110;
    this.passenger.booking.id=65;
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
}*/

public add() {
  this.passenger.busSeat.seatId=110;
  this.passenger.booking.id=65;
  this.passengers.push(this.userForm.value);
  
  //this.passengers.passengers.push(this.passenger);
  this.passenger=new Passenger();
}

remove(element){

  this.passengers.forEach((value,index) => {
    if(value == element){
      this.passengers.splice(index,1);
    }
  });
}
addAllPassengers(){
  this.service.savePassenger(this.passengers).subscribe(data =>{
    alert(JSON.stringify(data));
    console.log(data);
    console.log(this.passengers);
    this.message=data['message'];
    this.passengers=[];
   })
}

}




