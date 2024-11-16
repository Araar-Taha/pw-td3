import validator from "validator";

export class Park {
    id :number;
    spot_id : number;
    startedAt : Date;
    endedAt : Date;
    price : number;
    paid : boolean;

    constructor (id : number , spot_id : number , price : number  , endedAt : Date , startedAt? : Date, paid? : boolean ){
        this.id = id;
        this.spot_id = spot_id;
        if (!startedAt || !(startedAt instanceof Date)){
            this.startedAt = new Date();
        }else {
            this.startedAt = startedAt;
        }
        this.endedAt = endedAt;
        this.price = price;
        if(paid){
            this.paid = paid;
        }else{
            this.paid = false;//default value
        }
        


        
        


    }
}