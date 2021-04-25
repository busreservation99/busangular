import { UpdateSeatService } from './../update-seat.service';
import { PassingSeat } from './../appmodel/PassingSeat';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchSeatStatusService } from '../fetch-seat-status.service';


@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
   
  bookedSeatId:number[]=new Array();

  totalPrice:number=null;
  
  totalSeatsBooked:number=null;
  
  seats:Array<Number>= [];
  
  seatStatus: Array<any>[];
  
  price:number=150;
  
  selectedHobbies = [];

  disabledSeats = [];

  seatsBooked=[];
 
  busno;

  dis:boolean;

  sid;
  
  passingseat : PassingSeat = new PassingSeat();
  constructor(private router: Router,private fetchSeatStatusService:FetchSeatStatusService,private updateSeats:UpdateSeatService) { }
  ngOnInit(): void {   
    this.busno=sessionStorage.getItem('busNumber');
    this.sid=sessionStorage.getItem('schid');
    this.fetchSeatStatus(); 
 
  }


  fetchSeatStatus(){
      this.fetchSeatStatusService.fetchSeatStatusBus(this.busno,this.sid).subscribe(response => {
      this.seatStatus=response;
      console.log(this.seatStatus);
          for (let i = 0; i <this.seatStatus.length; i++) {
            this.seats.push(i);   
          }    
    })
    
  }

 

populateMyHobbies(value , status:boolean)
{ 
    if(this.seatsBooked.indexOf(value) === -1 && status)
    {
      
        this.seatsBooked.push(value);
        // console.log(this.selectedHobbies);
    }
    else if(!status)
    {
        let index = this.seatsBooked.indexOf(value);
        this.seatsBooked.splice(index, 1);
        // console.log(this.selectedHobbies);
    }
//     console.log(this.selectedHobbies);
}
faltufn(){
      console.log(this.seatsBooked);
      this.totalPrice=this.seatsBooked.length*this.price;
      this.totalSeatsBooked=this.seatsBooked.length;
      sessionStorage.setItem('totalPrice',this.totalPrice.toString());
      console.log(" Total Price="+this.totalPrice+" Total seats booked= "+this.totalSeatsBooked.toString());

}

confirmBooking(){
  this.router.navigate(['passenger']);
  console.log(this.seatsBooked.toString())
  sessionStorage.setItem('seatsBooked',JSON.stringify(this.seatsBooked.toString()));
  sessionStorage.setItem('totalSeats',JSON.stringify(this.seatsBooked.length));
  this.seatsBooked.forEach(element => {
    this.updateSeats.UpdateSeats(element).subscribe(data =>{

      this.bookedSeatId.push(data[0].seatId);
      
       sessionStorage.setItem('seatId',this.bookedSeatId.toString());
      alert(JSON.stringify(data));
      console.log(data);
     });
  });
  
}
}