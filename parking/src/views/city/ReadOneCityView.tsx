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

const ReadOneCityView = ({ city, parkings }: ReadOneCityViewProps) => {
  return Layout({
    pageHeading: ``,
    pageTitle: 'City Detail',
    children: html`
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f9f9fc;
          color: #333;
          margin: 0;
          padding: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .city-details {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px 30px;
          max-width: 600px;
          width: 100%;
        }

        .city-details h1 {
          font-size: 2em;
          margin-bottom: 20px;
          color: #1C274C;
          text-align: center;
        }

        .city-details p {
          font-size: 1.1em;
          margin: 10px 0;
          line-height: 1.6;
          color: #555;
        }

        .city-details p span {
          font-weight: bold;
          color: #333;
        }

        .city-details ul {
          list-style-type: none;
          padding: 0;
          margin: 20px 0;
        }

        .city-details ul li {
          margin: 10px 0;
        }

        .city-details ul li a {
          text-decoration: none;
          color: #6F00FF;
          font-weight: bold;
          transition: color 0.3s ease;
        } 

        .city-details ul li a:hover {
          color: gray;
        }
      </style>
      <div class="city-details">
        <h1>Welcome to ${city.name}</h1>
        <p>
          Country: <span>${city.country}</span>
        </p>
        <p>
          GPS: <br />
          Latitude <span>${city.location.latitude}</span>, Longitude
          <span>${city.location.longitude}</span>
        </p>
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
      </div>
    `,
  });
};

export default ReadOneCityView;