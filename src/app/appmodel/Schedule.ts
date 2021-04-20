import { Bus } from "./Bus";

export class Schedule{
    
    bus:Bus = new Bus();
    scheduleId:number;
    busArrivalDate:Date;
    busDepartureDate:Date;
    arrivalTime:string;
    departureTime:string;
}