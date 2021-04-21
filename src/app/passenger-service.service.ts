import { Passengers } from './appmodel/Passengers';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from './appmodel/Passenger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private http: HttpClient) { }

  savePassenger(passengers:Passengers) : Observable <object>{
    let url = "http://localhost:8181/addPassengers";
    return this.http.post(url,passengers);
  }
}
