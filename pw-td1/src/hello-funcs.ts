import type { Human } from "./types";

export function helloWorld(): string{
    return "Hello, World!";
}
const message=helloWorld();
console.log(message);


export function helloYou(name:string): string{
    if(name==""){
        return "error, can't be empty"
    }else{
return "Hello, "+name+"!";
    }
}



export function helloHuman(human: Human): string {
    let age = 2024 - human.birthYear;

    if (human.birthYear < 1800 || human.birthYear > 2024) {
        return "impossible man, check the year";
    }

    if (human.firstName === "" || human.lastName === "") {
        return "Error: You must have a first name and a last name.";
    }

    return `Hello, ${human.firstName} ${human.lastName}! You are ${age} years old.`;
}



export function repeatHelloYou(n:number, name:string):string{
    if (n <= 0) {
        return "Error: it has to be positive man";
    }
    else if (name =="") {
        return "Error: Name cannot be empty ";
    }else{
   
    let m="";
for(let i=1;i<=n;i++){
    m+= "Hello, "+name+"!" +"\n";
}
return m;
}
}