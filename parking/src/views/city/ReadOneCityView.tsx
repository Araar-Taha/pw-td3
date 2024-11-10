import {City} from "../../models/City";
import {Layout} from "../shared/Layout";
import { html } from 'hono/html';
import { Parking } from "../../models/Parking";
import { toSlug } from "../../utils/toSlug";



type ReadOneCityViewProps = {
city: City,
parkings : Parking[]
}

//utilisation du composant Layout en tant que base
//et définition du composant fonctionnel ReadOneCityView

const ReadOneCityView =
({ city,parkings }: ReadOneCityViewProps) =>{
    
    return Layout({
        pageHeading:`Welcome to ${city.name}`,
        pageTitle: 'City detail',
        children: html`
          <p>Country: ${city.country}</p>
          <p>GPS: Latitude ${city.location.latitude} <br> Longitude ${city.location.longitude}</p> 
          <h3>Parkings:</h3>
          <ul>
            ${parkings.map(
              (parking) => html`
              <li>
                <a href="/parkings/${parking.id}">${parking.name}</a>
              </li>
          `
        )}
      </ul>
        `,
      });
    }
export default ReadOneCityView;