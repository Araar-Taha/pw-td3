import { City } from '../../models/City';  


export function ReadAllCitiesView(cities: City[]): string {
    // Create HTML content as a string
    const citiesList = cities.map(city => `
        <li>
            <h2>${city.name}</h2>
            <p>Country: ${city.country}</p>
            <p>GPS: Latitude ${city.location.latitude}, Longitude ${city.location.longitude}</p>
        </li>
    `).join(''); // Join all the list items together

   
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>All Cities</title>
    </head>
    <body>
        <h1>List of Cities</h1>
        <ul>
            ${citiesList}  
        </ul>
    </body>
    </html>
    `;
}

export default ReadAllCitiesView 