import { City } from "../models/City";
import { Parking } from "../models/Parking";
import { GPS } from "../types/GPS";
import { generateRandomNumberId } from "../utils/generateRandomNumberId";
import { parkings } from "../types/parkings";
import { cities } from "../types/cities";

const aixLaChapelle = new City(generateRandomNumberId(), 'Aix-la-Chapelle', 'Allemagne', { latitude: 50.776351, longitude: 6.083862 });
const sanCristobal = new City(generateRandomNumberId(), 'San Cristóbal de La Laguna', 'Espagne', { latitude: 28.487180709838867, longitude: -16.313879013061523 });
const newcastle = new City(generateRandomNumberId(), 'Newcastle upon Tyne', 'Angleterre', { latitude: 54.9738474, longitude: -1.6131572 });

// const cities : cities =[aixLaChapelle,sanCristobal,newcastle];
const  cities : cities =[]
cities.push(aixLaChapelle)
cities.push(sanCristobal)
cities.push(newcastle)

// Parking à Aix-la-Chapelle (40 places, 2,80€/h)
const A = new Parking(generateRandomNumberId(), 'Aix-la-Chapelle Parking', aixLaChapelle.id, { latitude: 50.776351, longitude: 6.083862 }, 40, 2.80);

// Parking à San Cristóbal de La Laguna (70 places, 3,10€/h)
const B = new Parking(generateRandomNumberId(), 'San Cristóbal Parking', sanCristobal.id, { latitude: 28.487180709838867, longitude: -16.313879013061523 }, 70, 3.10);

// Parkings à Newcastle upon Tyne (60 places à 2,40€/h et 90 places à 3,20€/h)
const C = new Parking(generateRandomNumberId(), 'Newcastle Parking 1', newcastle.id, { latitude: 54.9738474, longitude: -1.6131572 }, 60, 2.40);
const D = new Parking(generateRandomNumberId(), 'Newcastle Parking 2', newcastle.id, { latitude: 54.9738474, longitude: -1.6131572 }, 90, 3.20);

const Parkings : parkings =[]
Parkings.push(A)
Parkings.push(B)
Parkings.push(C)
Parkings.push(D)



// Ajouter les parkings à Aix-la-Chapelle
aixLaChapelle.parkingsIds.push(A.id);

// Ajouter le parking à San Cristóbal de La Laguna
sanCristobal.parkingsIds.push(B.id);

// Ajouter les parkings à Newcastle upon Tyne
newcastle.parkingsIds.push(C.id);
newcastle.parkingsIds.push(D.id);


export default {cities , Parkings}