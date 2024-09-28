import { Planet } from '../../classes/Starship'; // Assurez-vous que le type Planet est exporté correctement depuis le bon fichier
import { Starship } from '../../classes/Starship';


export function calculateFlightDurationFromEarth(planet: Planet, starship: Starship, unity): number {
    if (starship.speed <= 0) {
      throw new Error("La vitesse du vaisseau doit être supérieure à 0.");
    }
  
    const distance = planet.distanceFromEarth; 
    const duration = distance / starship.speed; 
  
    return duration/unity; 
  }