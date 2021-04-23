import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchSeatStatusService } from '../fetch-seat-status.service';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  totalPrice:number=null;
  
  totalSeatsBooked:number=null;
  
  seats:Array<Number>= [];
  
  seatStatus: Array<any>[];
  
  price:number=150;
  
  selectedHobbies = [];

  seatsBooked=[];

  constructor(private router: Router,private fetchSeatStatusService:FetchSeatStatusService) { }
  
  fetchSeatStatus(){
      this.fetchSeatStatusService.fetchSeatStatusBus(101,219).subscribe(response => {
      this.seatStatus=response;
      console.log(this.seatStatus);
      this.loopFn();
        for(let i=1;i<=this.seatStatus.length;i++){
          
        this.seats.push(i);
    }
  
    })
  }



   
  ngOnInit(): void {
    this.fetchSeatStatus();  
   
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
console.log(" Total Price="+this.totalPrice+" Total seats booked= "+this.totalSeatsBooked.toString());
}

loopFn(){
    // this.seatStatus.forEach((e) => {
    //   console.log(e);
    for(let i=0;i<this.seatStatus.length;i++){
      if(this.seatStatus[i][0]==="Y"){
        console.log("Jhakas")
      }
      for(let j=0;j<this.seatStatus[i].length;j++){
        // "this.seatStatus[i][j] 
          // console.log("seats available at "+this.seatStatus[i][1]+" and status is "+this.seatStatus[i][0]);
         
      }}
// })
}

}


// populateMyHobbies(value , status:boolean)
// {
//     if(this.selectedHobbies.indexOf(value) === -1 && status)
//     {
//         this.selectedHobbies.push(value);
//         // console.log(this.selectedHobbies);
//     }
//     else if(!status)
//     {
//         let index = this.selectedHobbies.indexOf(value);
//         this.selectedHobbies.splice(index, 1);
//         // console.log(this.selectedHobbies);
//     }
// //     console.log(this.selectedHobbies);
// }