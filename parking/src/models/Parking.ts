import { GPS } from "../types/GPS";
import validator from "validator";
import { isValidGPS } from "../utils/isValidGPS";
import {v4 as uuidv4} from 'uuid';
import { Spot } from './Spot';
import { generateRandomNumberId } from "../utils/generateRandomNumberId";

export class Parking {
    id : number;
    name : string;
    city_id : number;
    location : GPS; //must verify
    numberOfPlaces : number; //must verify
    opened : boolean;
    hourlyRate : number; //must verify
    parkIds : number[];

    constructor (id : number,name:string,city_id : number , location : GPS , numberOfSpots : number , hourlyRate : number  , opened? : boolean){
        this.id = id;
        this.name = name;
        this.city_id = city_id;
        if (isValidGPS(location)){
        this.location = location;
        } else {
            throw new Error("Invalid GPS coordinates");
        }
        
        this.numberOfPlaces = numberOfSpots;
        if (opened){
            this.opened = opened;
        }else{
            this.opened = false;
        }
        


        if (hourlyRate > 0){
        this.hourlyRate = hourlyRate;
        } else {
            throw new Error("Hourly rate must be a positive number");
        }

        this.parkIds = [];
        for (let i = 0; i < numberOfSpots; i++) {
            this.parkIds.push(new Spot(generateRandomNumberId(),this.id).id);
        }  
    }

}