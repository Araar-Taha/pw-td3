import {City} from "../../models/City";
import {Layout} from "../shared/Layout";
import { html } from 'hono/html';
import { Parking } from "../../models/Parking";
import { toSlug } from "../../utils/toSlug";

//définition du type de paramètre




type ReadAllCitiesViewProps = {
cities: Array<City>;
}

//utilisation du composant Layout en tant que base
//et définition du composant fonctionnel ReadAllCitiesView

const ReadAllCitiesView = ({ cities }: ReadAllCitiesViewProps) => {
  const citiesList = cities.map(
    (city) => html`
      <li class="card">
        <h2>${city.name}</h2>
        <p>Country: ${city.country}</p>
        <p>GPS: Latitude ${city.location.latitude}, Longitude ${city.location.longitude}</p>
        <a href="/cities/${toSlug(city.name)}">City Details</a>
      </li>
    `
  );

  return Layout({
    pageHeading: 'All Cities',
    pageTitle: 'All Cities',
    children: html`
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f9;
          color: #333;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .container {
          width: 100%;
          max-width: 1200px;
          display: grid;
          grid-template-rows: auto auto 1fr;
          gap: 20px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          padding: 20px;
          background-color: #fff;
          border-bottom: 1px solid #ddd;
        }

        .header h1 {
          margin: 0;
          font-size: 2em;
          color: #1C274C;
          position: relative;
          left: 450px;
        }

        ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          width: 100%;
        }

        .card {
          background-color: #fff;
          border: 1px solid #ddd;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }

        .card h2 {
          font-size: 1.5em;
          color: #333;
          margin: 0 0 10px;
        }

        .card p {
          margin: 8px 0;
          color: #666;
        }

        .card a {
          display: inline-block;
          padding: 10px 15px;
          margin-top: 15px;
          font-size: 1em;
          color: #fff;
          background-color: #6F00FF;
          border-radius: 5px;
          text-decoration: none;
          transition: background-color 0.3s ease;
          position: relative;
          left: 90px;
        }

        .card a:hover {
          background-color: gray;
        }
      </style>
      <div class="container">
        <div class="header">
          <h1>List of Cities</h1>
        </div>
        <ul>
          ${citiesList}
        </ul>
      </div>
    `,
  });
};

export default ReadAllCitiesView;