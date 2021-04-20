import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  customerName: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.customerName = sessionStorage.getItem('customerName');
  }

  logout(){
    this.router.navigate(['']);
  }
}
