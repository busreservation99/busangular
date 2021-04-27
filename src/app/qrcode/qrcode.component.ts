import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.css']
})
export class QrcodeComponent implements OnInit {
  public myData:String=null;
  constructor() { this.myData='My data is coming';}
  
  ngOnInit(): void {
    
  }

}
