import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { AdminLogin } from '../appmodel/AdminLogin';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(private adminservice : AdminserviceService,private router: Router) { }

  ngOnInit(): void {
  }
  adminLogin : AdminLogin = new AdminLogin();
  message: string;
  loginCheck() {
    console.log(this.adminLogin);
    this.adminservice.login(this.adminLogin).subscribe(response => {
      //alert(JSON.stringify(response));
      //console.log(response);
      if(response.status == true) {
        this.router.navigate(['admin']);
      }
      else
        this.message = response.message;
    })
  }

}
