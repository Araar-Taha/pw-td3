import { v4 as uuidv4 } from 'uuid';

export class Spot {
    id: string;
    parkingId: string;

    constructor( parkingId: string) {
        this.id = uuidv4() ;
        this.parkingId = parkingId;
    }
}