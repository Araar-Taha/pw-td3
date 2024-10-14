import { createFactory } from 'hono/factory';
import ReadOneParkingView from '../../views/Parking/ReadOneParkingView';
import lists from '../../data/staticDatabase';
import { toSlug } from '../../utils/toSlug';

const factory = createFactory();

const ReadOneParkingController = factory.createHandlers((c) => {
    const parkingSlug = c.req.param('slug');
    const parking = lists.Parkings.find(p => toSlug(p.name) === parkingSlug);

    if (parking) {
        const parkingPage = ReadOneParkingView({ parking });
        return c.html(parkingPage);
    } else {
        return c.text('Parking not found', 404);
    }
});

export default ReadOneParkingController;
