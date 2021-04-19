import { Component, OnInit } from '@angular/core';
import { Registration } from '../appmodel/Registration';
import { RegisterService } from '../register.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

  registration: Registration  = new Registration();
  message:string;
  constructor(private service: RegisterService) {}

  addCustomer(){
    this.service.saveCustomer(this.registration).subscribe(data =>{
      alert(JSON.stringify(data));
      this.message=data['message'];
    }) 
  }
}


