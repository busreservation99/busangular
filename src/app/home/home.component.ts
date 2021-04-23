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
  
  constructor(private searchBusService:SearchBusService, private router: Router) { }

  fetchBus(){
  
    this.searchBusService.fetchBus(this.searchBus).subscribe(response => {
      // alert(JSON.stringify(response));
      console.log(response);
      this.data=response;

    })
  }

  bookNow(busId,dt){
    let messageId = busId.getAttribute('busNumber');
    let journeytime = dt.getAttribute('dtime');
    sessionStorage.setItem('busNumber',messageId );
    sessionStorage.setItem('dtime',journeytime );
    //let messageId = el.dataset.messageId;
    console.log("Bus Id: "+messageId+" DTIME "+journeytime);
    
    this.router.navigate(['seats']);
  }
  }
