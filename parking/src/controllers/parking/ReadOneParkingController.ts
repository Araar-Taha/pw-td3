import { createFactory } from 'hono/factory';
import ReadOneParkingView from '../../views/Parking/ReadOneParkingView';
import lists from '../../data/staticDatabase';
import { toSlug } from '../../utils/toSlug';
import { prisma } from '../..';

const factory = createFactory();

const ReadOneParkingController = factory.createHandlers(async (c) => {
    
    const parkingSlug = c.req.param('slug');
    // const parking = lists.Parkings.find(p => toSlug(p.name) === parkingSlug);
    // const foundParking = parking.findFirst(p => toSlug(p.name) === parkingSlug);
    const parking = await prisma.parking.findMany();
    const foundParking = parking.find(p => toSlug(p.name) === parkingSlug);

    if (foundParking) {
        const parkingPage = ReadOneParkingView({ parking : foundParking });
        return c.html(parkingPage);
    } else {
        return c.text('Parking not found', 404);
    }
});

export default ReadOneParkingController;
