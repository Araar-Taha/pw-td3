import { createFactory } from 'hono/factory';
import ReadAllParkingsView from '../../views/Parking/ReadAllParkingsView';
import lists from '../../data/staticDatabase';

const factory = createFactory();

const ReadAllParkingsController = factory.createHandlers((c) => {
    const htmlView = ReadAllParkingsView({ parkings: lists.Parkings,cities : lists.cities }); // Génère la vue avec les parkings
    return c.html(htmlView); // Retourne la vue HTML des parkings
});

export default ReadAllParkingsController;