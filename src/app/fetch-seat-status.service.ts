import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchSeatStatusService {

  constructor(private http: HttpClient) { }

  fetchSeatStatusBus(busNo:number, sid:number) : Observable <any>{
    let url = "http://localhost:8181/getSeatStatus?busno="+busNo+"&schedule="+sid;
    return this.http.get(url);
  }

}
