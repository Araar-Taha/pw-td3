import { GPS } from "../types/GPS";
import { toSlug } from "../utils/toSlug";
import {v4 as uuidv4} from 'uuid';

export class City {
    id : number;
    name : string;
    slug : string;
    parkingsIds : string[];
    country : string;
    location : GPS;

    constructor(id:number , name : string , country : string , location : GPS){
        this.id = id;
        this.name = name;
        this.slug = toSlug(name);
        this.parkingsIds = [];
        this.country = country;
        this.location = location;
    }

}

