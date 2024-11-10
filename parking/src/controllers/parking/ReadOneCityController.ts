import { createFactory } from 'hono/factory';
import ReadOneCityView from '../../views/city/ReadOneCityView';
import { Parking } from '../../models/Parking';
import { City } from '../../models/City';
import { toSlug } from '../../utils/toSlug';
import { prisma } from '../..';
import { GPS } from '../../types/GPS';

const factory = createFactory();

const ReadOneCityController = factory.createHandlers(async (c) => {
  try {
    
    const citySlug = c.req.param('slug');
    

    // Find city by slug
    const cities = await prisma.city.findMany();
    const oneCityData = cities.find(city => toSlug(city.name) === citySlug);

    // If the city is not found, return a 404 response
    if (!oneCityData) {
      return c.text('City not found', 404);
    }

    
    const cityParkings = await prisma.parking.findMany({
      where: { cityId: oneCityData.id },
    });

    // Map parking data to Parking class
    const parkings = cityParkings.map(parkingData => {
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

    
    const location: GPS = {
      latitude: oneCityData.latitude,
      longitude: oneCityData.longitude,
    };


    const parkingsIds = cityParkings.map(parking => parking.id);
    
    
    const OneCity = new City(
      oneCityData.id,
      oneCityData.name,
      oneCityData.country,
      location,
      parkingsIds
    );

    
    const CityPage = ReadOneCityView({ city: OneCity, parkings });
    return c.html(CityPage); 

  } catch (error) {
    console.error('Error in ReadOneCityController:', error);
    return c.text('An unexpected error occurred', 500);
  }
});

export default ReadOneCityController;
