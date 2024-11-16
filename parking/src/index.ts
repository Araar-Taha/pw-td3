import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client';

import HomeController from './controllers/HomeController'
import { serveStatic } from 'hono/bun'
import ReadAllCitiesControler from './controllers/parking/ReadAllCitiesController';
import ReadOneCityController from './controllers/parking/ReadOneCityController';
import { toSlug } from './utils/toSlug';
//

import ReadAllParkingsController from './controllers/parking/ReadAllParkingsController';
import  ReadOneParkingController  from './controllers/parking/ReadOneParkingController';
// import { cities } from './types/cities';
// import { parkings } from './types/parkings';

const app = new Hono()
export const prisma = new PrismaClient()

//adding static
app.use('/static/*', serveStatic({ root: './' }))
app.get('/',...HomeController)

app.get('/cities',...ReadAllCitiesControler )
app.get('/cities/:slug', ...ReadOneCityController)

app.get('/parkings', ...ReadAllParkingsController);
app.get('/parkings/:id', ...ReadOneParkingController);







// Temp use endpoints
// app.post('/createcities', async (c) => {
//   const { name,location, country } = await c.req.json()
//   const slug  = toSlug(name)
//   const city = await prisma.city.create({
//     data: { name, slug, location, country },
//   })
//   return c.json(city)
// })

// app.post('/addparking', async (c) => {
//     try {
//       // Extract the request data
//       const { name, location, numberOfPlaces, hourlyRate, cityId } = await c.req.json()
  
//       // Create a new parking entry
//       const parking = await prisma.parking.create({
//         data: {
//           name,
//           location,
//           numberOfPlaces,
//           hourlyRate,
//           cityId,
//         },
//       })
  
//       return c.json(parking)
//     } catch (error) {
//       // Return an error response if something goes wrong
//       console.error(error)
//       return c.json({ error: 'Failed to create parking' }, 500)
//     }
//   })





export default app
