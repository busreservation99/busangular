import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Passenger } from './appmodel/passeneger';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private http: HttpClient) { }

  savePassenger(passenger:Passenger) : Observable <object>{
    let url = "http://localhost:8181/addPassengers";
    return this.http.post(url,passenger);
  }
}
