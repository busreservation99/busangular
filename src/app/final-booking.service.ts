import { PassengerService } from './passenger-service.service';
import { Registration } from './appmodel/Registration';
import { Injectable, OnInit } from '@angular/core';
import { Passengers } from './appmodel/Passengers';
import { UpdateSeatService } from './update-seat.service';

@Injectable({
  providedIn: 'root'
})
export class FinalBookingService implements OnInit{
  passengers:Passengers= new Passengers();
  seatId;
  schid;
  busNumber;
  totalPrice;
  customerName;
  registrationId;
  // seatsBooked;
  totalSeats;
  message;
  seatsBooked=[];
  bookedSeatId:number[]=new Array();
  constructor(private updateSeats:UpdateSeatService,private passengerService:PassengerService) {

   }
  ngOnInit(): void {
    this.busNumber=sessionStorage.getItem('busNumber');
    this.seatId=sessionStorage.getItem('seatId');
    this.schid=sessionStorage.getItem('schid');

    this.totalPrice=sessionStorage.getItem('totalPrice');
    this.customerName=sessionStorage.getItem('customerName');
    this.registrationId=sessionStorage.getItem('registrationId');
    // 
    this.totalSeats=sessionStorage.getItem('totalSeats');
  }


  mainService(){
  
        // Seat Booking Service
        this.seatsBooked=JSON.parse(sessionStorage.getItem('seatsBooked'));
       
        this.seatsBooked.forEach(element => {
        this.updateSeats.UpdateSeats(element).subscribe(data =>{
        this.bookedSeatId.push(data[0].seatId);
  
       sessionStorage.setItem('seatId',this.bookedSeatId.toString());
      alert(JSON.stringify(data));
      console.log(data);
     });
  });

  this.passengers=JSON.parse(sessionStorage.getItem('passengers') );
  for(let i =0;i<this.seatsBooked.length;i++){
       this.passengers.passengers[i].seatId.seatId=this.seatsBooked[i];
    console.log(this.passengers);
  }
  this.passengerService.savePassenger(this.passengers).subscribe(data=>
    {
      alert(JSON.stringify(data));
        console.log(data);
        this.message=data['message'];
        this.passengers.passengers=[];
    }
    );
    
  }
}
