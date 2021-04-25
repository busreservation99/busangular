import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Amount } from './appmodel/Amount';
import { Bus } from './appmodel/Bus';
import { BusDetail } from './appmodel/BusDetails';
import { BusSeat } from './appmodel/BusSeat';
import { BusSeatStatus } from './appmodel/BusSeatStatus';
import { CustomerCount } from './appmodel/CustomerCount';
import { Payment } from './appmodel/Payment';
import { Route } from './appmodel/Route';
import { Schedule } from './appmodel/Schedule';


@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {


  constructor(private http:HttpClient) { }

  addbus(bus : Bus): Observable <any>{
    let url = "http://localhost:8181/addbus";
    return this.http.post(url,bus);
  }
  addschedule(schedule : Schedule):Observable <any>{
    let url = "http://localhost:8181/addSchedule";
    return this.http.post(url,schedule);
  }

  addroute(route : Route) : Observable<object>{
    let url = "http://localhost:8181/addRoute";
    return this.http.post(url,route);
  }

  fetch() : Observable<BusDetail>{
    let url = "http://localhost:8181/busdetails";
    return this.http.get<BusDetail>(url);
  }

  addseats(busSeatStatus : BusSeatStatus) : Observable<object>{
    let url = "http://localhost:8181/addSeats";
    return this.http.post(url,busSeatStatus);
  }

  fetchAmount() : Observable<any>{
    let url = "http://localhost:8181/fetchAmount";
    return this.http.get<Amount>(url);
  }

  fetchRegisterCount() : Observable<any>{
    let url = "http://localhost:8181/fetchRegisteredCustomer";
    return this.http.get<CustomerCount>(url);
  }

  fetchroute(busNumber : number){
    let url = "http://localhost:8181/fetchRoutes?busNumber="+busNumber;
    return this.http.get<Route>(url);
  }

  fetchBusSource(busNumber : number){
    let url = "http://localhost:8181/fetchsource?busNumber="+busNumber;
    return this.http.get<Bus>(url);
  }

  fetchBusDestination(busNumber : number){
    let url = "http://localhost:8181/fetchdestination?busNumber="+busNumber;
    return this.http.get<Bus>(url);
  }

}
