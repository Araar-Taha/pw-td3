import {City} from "../../models/City";
import {Layout} from "../shared/Layout";
import { html } from 'hono/html';
import { Parking } from "../../models/Parking";
import { toSlug } from "../../utils/toSlug";



type ReadOneCityViewProps = {
city: City
}

//utilisation du composant Layout en tant que base
//et définition du composant fonctionnel ReadOneCityView

const ReadOneCityView =
({ city }: ReadOneCityViewProps) =>{
    
    return Layout({
        pageHeading:`Welcome to ${city.name}`,
        pageTitle: 'City detail',
        children: html`
          <p>Country: ${city.country}</p>
          <p>GPS: Latitude,Longitude ${city.location}</p>
            
        `,
      });
    }
export default ReadOneCityView;