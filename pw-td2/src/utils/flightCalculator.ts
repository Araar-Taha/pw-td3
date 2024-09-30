import type{ Planet } from '../../classes/Starship'; 
import { Starship } from '../../classes/Starship';


export function calculateFlightDurationFromEarth(planet: Planet,starship: Starship,unity: 'hours' | 'days' = 'hours'): number {
  if (starship.speed <= 0) {
    throw new Error("La vitesse du vaisseau doit être supérieure à 0.");
  }

  const distance = planet.distanceFromEarth; 
  const duration = distance / starship.speed; // ici on  aura la date  en heures

  if (unity === 'days') {
    return duration / 24; 
  }
  return duration; 
}
