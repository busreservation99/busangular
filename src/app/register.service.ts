import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Login } from './appmodel/login';
import { Registration } from './appmodel/Registration';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  saveCustomer(registration:Registration) : Observable <object>{
    let url = "http://localhost:8181/register";
    return this.http.post(url,registration);
  }

  login(login: Login) : Observable<any> {
    let url = "http://localhost:8181/login";
   return this.http.post(url, login); 
  }
}
