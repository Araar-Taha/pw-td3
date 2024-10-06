import { createFactory } from 'hono/factory'
import ReadAllCitiesView from '../../views/city/ReadAllCitiesView';
import { html } from 'hono/html';
import lists  from '../../data/staticDatabase';


const factory = createFactory();


const ReadAllCitiesControler = factory.createHandlers((c) => {
    const htmlView = ReadAllCitiesView(lists.cities)
    return c.html(htmlView); // Return cities as JSON response
  });

export default ReadAllCitiesControler  