import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';

export type Planet = {
    name: string;
    distanceFromEarth: number; 
  };

 enum StarshipStatus {
    PARKED = "Parked",
    TAKING_OFF = "Taking off",
    FLYING = "Flying",
    LANDING = "Landing"
  }


  
  export class Starship {
    public ref: string;
    public speed: number;
    public status: StarshipStatus;
    public id: string;
  
    constructor(ref: string, speed: number, id?: string) {
      this.ref = ref;
      this.speed = speed;
      this.status = StarshipStatus.PARKED;
       
      if (id && validator.isUUID(id, 4)) {
        this.id = id;
      } else if (!id) {
        this.id = uuidv4();
      } else {
        throw new Error("L'ID fourni n'est pas un UUID valide.");
      }
    
    }

    
  
    public takeOff() {
      if (this.status !== StarshipStatus.PARKED) {
        console.log("L'avion n'est pas stationné.");
      } else {
        this.status = StarshipStatus.TAKING_OFF;
        console.log(`${this.ref} est en train de décoller.`);
      }
    }
  
    public park() {
      if (this.status !== StarshipStatus.FLYING) {
        return "L'avion ne peut pas se garer car il n'est pas en vol.";
      } else {
        this.status = StarshipStatus.PARKED;
        return `${this.ref} est stationné.`;
      }
    }
  
    public fly() {
      if (this.status !== StarshipStatus.TAKING_OFF) {
        return "L'avion ne peut pas voler car il n'est pas en phase de décollage.";
      } else {
        this.status = StarshipStatus.FLYING;
        return `${this.ref} est en vol.`;
      }
    }
  
    public land() {
      if (this.status !== StarshipStatus.FLYING) {
        return "L'avion ne peut pas atterrir car il n'est pas en vol.";
      } else {
        this.status = StarshipStatus.LANDING;
        return `${this.ref} est en train d'atterrir.`;
      }
    }
  }
  
  
  