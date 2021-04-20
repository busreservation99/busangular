import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBus } from '../appmodel/searchBus';
import { HomeComponent } from '../home/home.component';
import { SearchBusService } from '../search-bus.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
 @Input() datatype:any;

  }
