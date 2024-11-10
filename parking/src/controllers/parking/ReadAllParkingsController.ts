import { createFactory } from 'hono/factory';
import ReadAllParkingsView from '../../views/Parking/ReadAllParkingsView';
import { prisma } from "../../index";
import { Parking } from '../../models/Parking';
import { GPS } from '../../types/GPS';

// import lists from '../../data/staticDatabase';

const factory = createFactory();

const ReadAllParkingsController = factory.createHandlers(async (c) => {
  try {
    
    const allParkingsData = await prisma.parking.findMany();

    // Creating an array of instances of Parking from allParkingData
    const allParkings = allParkingsData.map(parkingData => {
      const location: GPS = {
        latitude: parkingData.latitude,
        longitude: parkingData.longitude,
      };

      return new Parking(
        parkingData.id,
        parkingData.name,
        parkingData.cityId,
        location,
        parkingData.numberOfPlaces,
        parkingData.hourlyRate
      );
    });

    // Fetch all cities to create the cities dictionary
    const allCities = await prisma.city.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    // Creating cities dictionary to map cityId to city name
    const citiesDictionary: { [key: number]: string } = allCities.reduce((acc, city) => {
      acc[city.id] = city.name;
      return acc;
    }, {} as { [key: number]: string });

    
    const htmlView = ReadAllParkingsView({ parkings: allParkings, cities: citiesDictionary });
    return c.html(htmlView);

  } catch (error) {
    
    console.error("Error fetching parkings or cities:", error);
    return c.text('An error occurred while fetching parking data.', 500);
  }
});

export default ReadAllParkingsController;
