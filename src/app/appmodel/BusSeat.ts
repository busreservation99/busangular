import { Bus } from './Bus';
import { Schedule } from './Schedule';
export class BusSeat{
    seatId:number;	 
    bus:Bus=new Bus();	 

    status:string;	 

    seatAvailableStatus:string;	 
    schedule:Schedule=new Schedule();	 
    seatNumber:number;
}