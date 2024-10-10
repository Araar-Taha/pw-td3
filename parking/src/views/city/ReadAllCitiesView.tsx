import {City} from "../../models/City";
import {Layout} from "../shared/Layout";
import { html } from 'hono/html';
import { Parking } from "../../models/Parking";
import { toSlug } from "../../utils/toSlug";

//définition du type de paramètre




type ReadAllCitiesViewProps = {
cities: Array<City>;
parkings : Array<Parking>;
}

//utilisation du composant Layout en tant que base
//et définition du composant fonctionnel ReadAllCitiesView

const ReadAllCitiesView =
({ cities , parkings }: ReadAllCitiesViewProps) =>{
    const citiesList = cities.map(city => html`
    <li>
      <h2>${city.name}</h2>
      <p>Country: ${city.country}</p>
      <p>GPS: Latitude ${city.location.latitude}, Longitude ${city.location.longitude}</p>
      <a href="/cities/${toSlug(city.name)}"> City Details</a>  
    </li>
    `);
    return Layout({
        pageHeading: 'All Cities',
        pageTitle: 'All Cities',
        children: html`
          <h1>List of Cities</h1>
          <ul>
            ${citiesList}
          </ul>
        `,
      });
    }
export default ReadAllCitiesView;