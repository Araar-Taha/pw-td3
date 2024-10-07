import {City} from "../../models/City";
import {Layout} from "../shared/Layout";
import Lists from '../../data/staticDatabase'
import { html } from 'hono/html';

//définition du type de paramètre




type ReadAllCitiesViewProps = {
cities: Array<City>;
}


//utilisation du composant Layout en tant que base
//et définition du composant fonctionnel ReadAllCitiesView
const ReadAllCitiesView =
({ cities }: ReadAllCitiesViewProps) =>{
    const citiesList = cities.map(city => html`
    <li>
      <h2>${city.name}</h2>
      <p>Country: ${city.country}</p>
      <p>GPS: Latitude ${city.location.latitude}, Longitude ${city.location.longitude}</p>
    </li>
    `);
    return Layout({
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