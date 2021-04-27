import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateSeatService implements OnInit {

  seatIds:any;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
   
  }

  UpdateSeats(seatN:number) : Observable <object>{
    this.seatIds=sessionStorage.getItem('seatsBooked');
    console.log(this.seatIds);
    let url = "http://localhost:8181/updateSeats?seatId="+seatN;
    return this.http.post(url,null);
  }

  getBookingId(id : number) : Observable<Object>{
    let url = "http://localhost:8181/addBooking";
    return this.http.post(url,id);
  }

}
