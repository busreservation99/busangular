import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../appmodel/login';
import { Registration } from '../appmodel/Registration';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  login: Login = new Login();
  message: string;
  
  constructor(private registerService:RegisterService, private router: Router) { }

  registration: Registration  = new Registration();
  message1:string;
  

  addCustomer(){
    this.registerService.saveCustomer(this.registration).subscribe(data =>{
      alert(JSON.stringify(data));
      this.message1=data['message'];
    }) 
  }
  loginCheck() {
    console.log(this.login);
    this.registerService.login(this.login).subscribe(response => {
      //alert(JSON.stringify(response));
      //console.log(response);
      if(response.status == true) {
        let registrationId = response.registrationId;
        let customerName = response.name;
        sessionStorage.setItem('registrationId', String(registrationId));
        sessionStorage.setItem('customerName', customerName);
        this.router.navigate(['dashboard']);
        
      }
      else
        this.message = response.message;
    })
  }
  
  hello="container"
  
  signUpButton()  {
   this.hello="container right-panel-active";
  }
  
  signInButton()  {
    this.hello="container";
   }
}
