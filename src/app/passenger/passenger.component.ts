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

  pass;
  message:string;
  display:boolean=true;
  passenger:Passenger = new Passenger();
  passengers:Passengers= new Passengers();
  //passengers: Array<Passenger> = new Array();

  //userForm:FormGroup;
 // passengers:any;
  
  
  constructor(private fb:FormBuilder,private service:PassengerService, private router: Router){
    /*this.passengers=[];
    
    //this.userForm = this.fb.group({
      name: ['',Validators.required],
      phoneNumber: ['',Validators.required],
      email:['',Validators.required]
    })*/
  }
  /*addPassenger(){
    this.passenger.busSeat.seatId=113;
    this.passenger.booking.id=201;
    this.passengers.passengers.push(this.passenger);
    this.service.savePassenger(this.passengers).subscribe(data =>{
    alert(JSON.stringify(data));
    console.log(data);
    this.message=data['message'];
    this.passengers.passengers=[];
    })
   }*/

  addPassenger(){
    // this.passenger.seatId.seatId=557;
     this.passenger.booking.id=231;
    this.passengers.passengers.push(this.passenger);
    this.passenger=new Passenger();
    console.log(this.passengers.passengers)
  }
  
addAllPassengers(){

    // this.passengers.passengers.push(this.passenger);
    sessionStorage.setItem('passengers',JSON.stringify(this.passengers));
  //   this.pass=JSON.parse(sessionStorage.getItem('passengers'));
  //    this.service.savePassenger(this.pass).subscribe(data =>{
  //   alert(JSON.stringify(data));
  //   console.log(data);
  //   this.message=data['message'];
  //   this.passengers.passengers=[];
    
  //  })
   this.router.navigate(['payment']);
}
  remove(element){
    console.log(this.passengers.passengers)
    this.passengers.passengers.forEach((value,index) => {
    if(value == element){
      this.passengers.passengers.splice(index,1);
    }
  });
  console.log(this.passengers.passengers)
}
}
/*public add() {
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
edit(ele){
  this.passengers.forEach((value,index) =>{
    if(value == ele){
      this.passengers.push(this.userForm.value);
    }
  })
}
addAllPassengers(){
  sessionStorage.setItem('passengers',JSON.stringify(this.passengers));
  this.service.savePassenger(this.passengers).subscribe(data =>{
    alert(JSON.stringify(data));
    console.log(data);
    console.log(this.passengers);
    this.message=data['message'];
    this.passengers=[];
   })
}

}*/




