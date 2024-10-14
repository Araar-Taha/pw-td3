import { Layout } from '../shared/Layout';
import { html } from 'hono/html';
import { Parking } from '../../models/Parking';

type ReadOneParkingViewProps = {
    parking: Parking;
};

const ReadOneParkingView = ({ parking }: ReadOneParkingViewProps) => {
    return Layout({
        pageHeading: `Parking Details for ${parking.name}`,
        pageTitle: `Parking: ${parking.name}`,
        children: html`
            <p>Location: Latitude ${parking.location.latitude}, Longitude ${parking.location.longitude}</p>
            <p>Number of Spots: ${parking.numberOfSpots}</p>
            <p>Opened: ${parking.opened ? 'Yes' : 'No'}</p>
            <p>Hourly Rate: ${parking.hourlyRate} €</p>
        `,
    });
};

export default ReadOneParkingView;
