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
  
  
  constructor(private searchBusService:SearchBusService, private router: Router) { }
  fetchBus(){

    
    this.searchBusService.fetchBus(this.searchBus).subscribe(response => {
      // alert(JSON.stringify(response));
      console.log(response);
      this.data=response;
    })
  }
  }
   
    

