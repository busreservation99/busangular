import { Bus } from "./Bus";

export class Route  {

    bus:Bus = new Bus();
    busStopName:string;
    fare:number;
    stopArrivalTime:string;
    stopDepartureTime:string;
}