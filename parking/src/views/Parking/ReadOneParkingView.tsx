import { Layout } from '../shared/Layout';
import { html } from 'hono/html';
import { Parking } from '../../models/Parking';

type ReadOneParkingViewProps = {
    parking: Parking;
};

const ReadOneParkingView = ({ parking }: ReadOneParkingViewProps) => {
    return Layout({
        pageHeading: ``,
        pageTitle: `Parking: ${parking.name}`,
        children: html`
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f9f9fc;
                    color: #333;
                    margin: 0;
                    padding: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }

                .parking-details {
                    background-color: #fff;
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    padding: 20px 30px;
                    max-width: 500px;
                    width: 100%;
                }

                .parking-details h1 {
                    font-size: 2em;
                    margin-bottom: 20px;
                    color: #1C274C;
                    text-align: center;
                }

                .parking-details p {
                    font-size: 1.1em;
                    margin: 10px 0;
                    line-height: 1.6;
                    color: #555;
                }

                .parking-details p span {
                    font-weight: bold;
                    color: #333;
                }

                .parking-details p.opened {
                    color: ${parking.opened ? "#28a745" : "#dc3545"};
                    font-weight: bold;
                }
            </style>
            <div class="parking-details">
                <h1>Parking Details for ${parking.name}</h1>
                <p>Location: Latitude <span>${parking.location.latitude}</span>, Longitude <span>${parking.location.longitude}</span></p>
                <p>Number of Spots: <span>${parking.numberOfPlaces}</span></p>
                <p class="opened">Opened: ${parking.opened ? 'Yes' : 'No'}</p>
                <p>Hourly Rate: <span>${parking.hourlyRate} €</span></p>
            </div>
        `,
    });
};


export default ReadOneParkingView;
