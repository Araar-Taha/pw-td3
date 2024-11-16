import { createFactory } from 'hono/factory';
import ReadOneParkingView from '../../views/Parking/ReadOneParkingView';
import { GPS } from '../../types/GPS';
import { Parking } from '../../models/Parking';
import { prisma } from '../..';

const factory = createFactory();

const ReadOneParkingController = factory.createHandlers(async (c) => {
  try {
    const parkingId = parseInt(c.req.param('id'), 10); 
    
    if (isNaN(parkingId)) {
      return c.text('Invalid parking ID', 400); 
    }

    
    const oneParkingData = await prisma.parking.findFirstOrThrow({
      where: { id: parkingId },
    });

    // Prepare GPS location
    const location: GPS = {
      latitude: oneParkingData.latitude,
      longitude: oneParkingData.longitude,
    };

    // Create an instance of Parking
    const oneParking = new Parking(
      oneParkingData.id,
      oneParkingData.name,
      oneParkingData.cityId,
      location,
      oneParkingData.numberOfPlaces,
      oneParkingData.hourlyRate,
      oneParkingData.opened
    );

   
    const parkingPage = ReadOneParkingView({ parking: oneParking });
    return c.html(parkingPage);

  } catch (error) {
   
    if (error instanceof Error) {
      if (error.message === 'Record to update not found') {
        return c.text('Parking not found', 404); 
      }
      console.error(error); 
      return c.text('Internal server error', 500);  
    
    return c.text('Unexpected error', 500);
  }
}
});

export default ReadOneParkingController;
