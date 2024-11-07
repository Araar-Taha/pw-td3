import { createFactory } from 'hono/factory'
import ReadAllCitiesView from '../../views/city/ReadAllCitiesView';
import { html } from 'hono/html';
// import lists  from '../../data/staticDatabase';
import { prisma } from "../../index";
import { City } from '../../models/City';
import { GPS } from '../../types/GPS';


const factory = createFactory();


const ReadAllCitiesControler = factory.createHandlers(async (c) => {
  try {
    
    const cities = await prisma.city.findMany();
    
    
    const htmlView = ReadAllCitiesView({cities})

    // Return the generated HTML as a response
    return c.html(htmlView)
  } catch (error) {
    console.error(error)
    return c.json({ error: 'Failed to fetch cities' }, 500)
  }
});

export default ReadAllCitiesControler  