import { createFactory } from 'hono/factory'
import ReadOneCityView from '../../views/city/ReadOneCityView'
// import lists  from '../../data/staticDatabase';
import { City } from '../../models/City';
import { toSlug } from '../../utils/toSlug';
import { prisma } from '../..';


const factory = createFactory()
const ReadOneCityController = factory.createHandlers(async (c) => {
    const citySlug = c.req.param('slug') 
    const cities = await prisma.city.findMany();
    const OneCity = cities.find(city => toSlug(city.name) === citySlug);
    if (OneCity) {
        // If a city is found, render the view with the city data
        const CityPage = ReadOneCityView({ city: OneCity });
        return c.html(CityPage); // Return the rendered city view
    } else {
        // If no matching city is found, return a 404 error page
        return c.text('City not found', 404);
    }
}

)

export default ReadOneCityController