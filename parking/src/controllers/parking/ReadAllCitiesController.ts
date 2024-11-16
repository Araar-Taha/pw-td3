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
    
    const citiesData = await prisma.city.findMany();
    const parkingsData = await prisma.parking.findMany({
      select:{
        id: true,
        cityId: true
      },
    })

    
    const parkingsByCityId: Record<number, number[]> = {};
    parkingsData.forEach((parking) => {
    if (!parkingsByCityId[parking.cityId]) {
    parkingsByCityId[parking.cityId] = [];
    }
    parkingsByCityId[parking.cityId].push(parking.id);
    });

    const cities = citiesData.map((city) => {
      const location: GPS = {
        latitude: city.latitude,
        longitude: city.longitude,
      };

      const parkingsIds = parkingsByCityId[city.id] || [];

      return new City(city.id, city.name, city.country, location, parkingsIds);
    });
    

    
    
    const htmlView = ReadAllCitiesView({cities})

    
    return c.html(htmlView)
  } catch (error) {
    console.error(error)
    return c.json({ error: 'Failed to fetch cities' }, 500)
  }
});

export default ReadAllCitiesControler  