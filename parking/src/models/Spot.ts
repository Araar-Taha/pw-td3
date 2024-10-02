import { v4 as uuidv4 } from 'uuid';

export class Spot {
    id: number;
    parkingId: number;

    constructor( id : number ,parkingId: number) {
        this.id = id ;
        this.parkingId = parkingId;
    }
}