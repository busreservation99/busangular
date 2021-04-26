import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {
  
  constructor() {
    let ar:number[]=[1,2,3,4,5];
      console.log(this.myArray);  
       
      
      
    
   }
 
  ngOnInit(): void {
  }
  name = 'Angular';

  messages = [
    {
      id: 11214544,
      text: "Message 11214544"
    },
    {
      id: 11214545,
      text: "Message 11214545"
    },
    {
      id: 11214546,
      text: "Message 11214546"
    },
    {
      id: 11214547,
      text: "Message 11214547"
    }

  ]

  logMessageId(el){

    let messageId = el.getAttribute('data-messageID');
    //let messageId = el.dataset.messageId;
    console.log("Message Id: ", messageId);

  }
    myString = 'Hardik,Paresh,Vimal,Harshad,Kiran';
  
    myArray = this.myString.split(',');

}


