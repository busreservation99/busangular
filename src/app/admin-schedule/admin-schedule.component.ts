import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-admin-schedule',
  templateUrl: './admin-schedule.component.html',
  styleUrls: ['./admin-schedule.component.css']
})
export class AdminScheduleComponent implements OnInit {

  constructor(private adminservice : AdminserviceService,private router: Router) { }

  ngOnInit(): void {
    this.fetchschedule();
  }
  busschedule:any;
  fetchschedule(){
    this.adminservice.schedule().subscribe(data =>{
      this.busschedule=data;
    })
  }


}
