import { Schedule } from './../appmodel/Schedule';
import { SearchBusService } from './../search-bus.service';
import { SearchBus } from './../appmodel/searchBus';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  searchBus:SearchBus= new SearchBus();
  
  message:String;

  data:any;
  
  seatsSelected:number;
  
  arrivalTime;
  constructor(private searchBusService:SearchBusService, private router: Router) { }

  fetchBus(){

    this.searchBusService.fetchBus(this.searchBus).subscribe(response => {
    console.log(response);
    this.data=response;
    sessionStorage.setItem('source',JSON.stringify(this.searchBus.source) );
    sessionStorage.setItem('destination',JSON.stringify(this.searchBus.destination));

    })
  }

  bookNow(busId,sid,departure,arrival,busName){
    let messageId = busId.getAttribute('busNumber');
    let schid = sid.getAttribute('schid');
    let departureTime=departure.getAttribute('departure');
    let arrivalTime=arrival.getAttribute('arrival');
    let busName2=busName.getAttribute('busName');
    sessionStorage.setItem('busNumber',messageId );
    sessionStorage.setItem('schid',schid );
    sessionStorage.setItem('departure',departureTime );
    sessionStorage.setItem('arrival',arrivalTime );
    sessionStorage.setItem('busName',busName2 );
    //let messageId = el.dataset.messageId;
    console.log("Bus Id: "+messageId+" schid "+schid);
    
    this.router.navigate(['seats']);
  }
  }
