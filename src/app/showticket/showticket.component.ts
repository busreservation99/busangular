import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showticket',
  templateUrl: './showticket.component.html',
  styleUrls: ['./showticket.component.css']
})
export class ShowticketComponent  {

  message:string;
  ticketId:number;
  searchTicket(){
    if(this.ticketId==12345){
      this.message="Booking id:125        Bus Number:203 Source: Borivali Mumbai Destination:Pune"
         
    }
    else{
      this.message="**Invalid Booking Id entered!!"
    }
  }

}
