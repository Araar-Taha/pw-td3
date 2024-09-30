
import type{ Planet } from '../classes/Starship';
import { Starship } from "../classes/Starship";
import { Citron } from '../classes/Citron';
import { HuileOlive } from '../classes/HuileOlive';
import { Sucre } from '../classes/Sucre';
import { TomatesCerise } from '../classes/TomatesCerise';
import { Cart } from '../classes/Cart';

var starship: Starship = new Starship("Prometheus",100000);
starship.fly();
console.log(starship.land());
console.log(starship);

try {
  const newShip = new Starship("Explorer", 90000);
  console.log("ID généré :", newShip.id);

  const validUUIDShip = new Starship("Voyager", 110000, "123e4567-e89b-12d3-a456-426614174000");
  console.log("Vaisseau avec UUID valide :", validUUIDShip.id);

  const invalidUUIDShip = new Starship("InvalidShip", 70000, "invalid-uuid");
} catch (error) {
  console.error("ya une rreur :", error.message);
}


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

const flightDuration = calculateFlightDurationFromEarth(p, starship,'days');

console.log(`La durée du vol de la Terre à ${p.name} est de ${flightDuration} heures.`);



const cart = new Cart();
  const citron = new Citron(0.5, 2);
  const huileOlive = new HuileOlive(5, 1.5);
  const sucre = new Sucre(3.9, 0.5);
  const tomates = new TomatesCerise(3.5, 3);
  
  cart.add(citron);
  cart.add(huileOlive);
  cart.add(sucre);
  cart.add(tomates);
  
  console.log("Détails du panier :", cart.displayDetails());
  console.log("Montant total :", cart.calculateAmount());

