import { BusSeat } from './BusSeat';
import { Booking } from './Booking';


export class Passenger{
    name:String;
    phoneNumber:number;
    email:String;
    booking:Booking=new Booking();
    busSeat:BusSeat=new BusSeat();
} 