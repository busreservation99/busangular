import { SearchBus } from './appmodel/searchBus';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SearchBusService {

  constructor(private http: HttpClient) { }

  fetchBus(searchBus:SearchBus) : Observable <object>{
    let url = "http://localhost:8181/fetchBus3?source="+searchBus.source+"&destination="+searchBus.destination+"&date="+searchBus.date;
    return this.http.get(url);
  }

}
