import { Component, OnInit } from '@angular/core';
import { Passenger } from '../appmodel/passeneger';
import { PassengerService } from '../passenger-service.service';

@Component({
  selector: 'passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent {

  message:string;
  passenger :Passenger = new Passenger();

  constructor(private service:PassengerService){}
  addPassenger(){
   this.service.savePassenger(this.passenger).subscribe(data =>{
    alert(JSON.stringify(data));
    console.log(data);
    this.message=data['message'];

   })


 }
}
