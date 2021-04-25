import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-admin-show-all-buses',
  templateUrl: './admin-show-all-buses.component.html',
  styleUrls: ['./admin-show-all-buses.component.css']
})
export class AdminShowAllBusesComponent implements OnInit {

  constructor(private adminservice : AdminserviceService,private router: Router) { }

  ngOnInit(): void {
    this.fetchAllBusDetails();
  }
  busdata:any;
  fetchAllBusDetails(){
    this.adminservice.fetch().subscribe(busdetails => {
       this.busdata=busdetails;
      //console.log(this.busdetail)
    })
  }
  showallbuses(){
    this.router.navigate['admin-show-buses']
  }

}
