import { createFactory } from 'hono/factory';
import ReadAllParkingsView from '../../views/Parking/ReadAllParkingsView';
import { prisma } from "../../index";

// import lists from '../../data/staticDatabase';

const factory = createFactory();

const ReadAllParkingsController = factory.createHandlers(async(c) => {
    const allParkings = await prisma.parking.findMany();
    const allCities = await prisma.city.findMany();

    const htmlView = ReadAllParkingsView({ parkings:allParkings,cities :allCities }); // Génère la vue avec les parkings
    return c.html(htmlView); // Retourne la vue HTML des parkings
});

export default ReadAllParkingsController;