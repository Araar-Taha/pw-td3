import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';

import type{ Planet } from '../classes/Starship';
import { Starship } from "../classes/Starship";

var starship: Starship = new Starship("Prometheus",100000,"1111");
starship.fly();
console.log(starship.land());
console.log(starship);


const planet: Planet[] = [
    { name: "Mercure", distanceFromEarth: 92000000 },
    { name: "Venus", distanceFromEarth: 41400000 },
    { name: "Jupiter", distanceFromEarth: 628000000},
      {  name: "Mars", distanceFromEarth: 78000000},
       { name: "Saturne", distanceFromEarth: 1275000000},
        {name: "Uranus", distanceFromEarth: 2724000000},
        {name: "Neptune", distanceFromEarth: 4351000000
     }
  ];

  
  
  for(const p of planet){
    console.log(`${p.name} est à une distance de ${p.distanceFromEarth} km de la Terre.`);
  }


  planet.sort((a, b) => a.distanceFromEarth - b.distanceFromEarth);

console.log("Planètes triées par distance croissante :");
planet.forEach(p => console.log(`${p.name} : ${p.distanceFromEarth} km`));


planet.sort((a, b) => a.name.localeCompare(b.name));

console.log("Planètes triées par ordre alphabétique croissant :");
planet.forEach(p => console.log(p.name));



planet.sort((a, b) => b.name.localeCompare(a.name));

console.log("Planètes triées par ordre alphabétique décroissant :");
planet.forEach(p => console.log(p.name));




const totalDistance = planet
  .reduce((sum, planet) => sum + planet.distanceFromEarth, 0);

const averageDistance = totalDistance / (planet.length );  

console.log(`La distance moyenne des 7 autres planètes au système solaire est : ${averageDistance} km`);



import { calculateFlightDurationFromEarth } from './utils/flightCalculator';

const p=planet[0];

const flightDuration = calculateFlightDurationFromEarth(p, starship,24);

console.log(`La durée du vol de la Terre à ${p.name} est de ${flightDuration} heures.`);

