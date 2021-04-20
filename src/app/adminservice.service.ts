import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bus } from './appmodel/Bus';
import { Route } from './appmodel/Route';
import { Schedule } from './appmodel/Schedule';


@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {

  constructor(private http:HttpClient) { }

  addbus(bus : Bus): Observable <object>{
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

}
