import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showticket',
  templateUrl: './showticket.component.html',
  styleUrls: ['./showticket.component.css']
})
export class ShowticketComponent  implements OnInit {
  public myData:String=null;
  busNumber;
  totalPrice;
  totalSeats;
  passengers:[];
  seatId:[];
  departureTime;
  arrivalTime;
  source;
  destination;
  busName;



  constructor() { this.myData='My data is coming';
}
  ngOnInit(): void {
    this.busNumber=sessionStorage.getItem('busNumber');
    this.totalPrice=sessionStorage.getItem('totalPrice');
    this.passengers=JSON.parse(sessionStorage.getItem('passengers'));
    // this.seatId=JSON.parse(sessionStorage.getItem('seatId'));
    this.totalSeats=sessionStorage.getItem('totalSeats');
    this.departureTime = sessionStorage.getItem('departure');
    this.arrivalTime = sessionStorage.getItem('arrival');
    console.log(this.arrivalTime);
    this.source = JSON.parse(sessionStorage.getItem('source').toString());
    this.destination = JSON.parse(sessionStorage.getItem('destination').toString());
    this.busName=sessionStorage.getItem('busName');
    
  }
  message:string;
  ticketId:number;

  searchTicket(){
    if(this.ticketId==12345){
      this.message="Booking id:125 Bus Number:203 Source: Borivali Mumbai Destination:Pune"
         
    }
    else{
      this.message="**Invalid Booking Id entered!!"
    }
  }

}
