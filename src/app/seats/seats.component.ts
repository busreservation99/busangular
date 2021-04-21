import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {

  seats:number[]=new Array(8);
  constructor() { }
  seatsBooked:number[]=new Array();

   hobbies: Array<string> = ['walking','running','sleeping'];
  
  ngOnInit(): void {
    
  }
  foo = 'Hello';
  bar = 'World';
  price:number=150;
  changeFn(e) {
    this.foo = e.target.value;
    this.seatsBooked.push(e.target.value);
    console.log(this.seatsBooked);
  }
  modelChangeFn(e) {
    this.bar = e;
  }
  selectedHobbies = [];

populateMyHobbies(value , status:boolean)
{
    if(this.selectedHobbies.indexOf(value) === -1 && status)
    {
        this.selectedHobbies.push(value);
        // console.log(this.selectedHobbies);
    }
    else if(!status)
    {
        let index = this.selectedHobbies.indexOf(value);
        this.selectedHobbies.splice(index, 1);
        // console.log(this.selectedHobbies);
    }
//     console.log(this.selectedHobbies);
}
faltufn(){
console.log(this.selectedHobbies);
}
}
