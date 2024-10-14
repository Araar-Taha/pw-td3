import { Hono } from 'hono'
import HomeController from './controllers/HomeController'
import { serveStatic } from 'hono/bun'
import ReadAllCitiesControler from './controllers/parking/ReadAllCitiesController';
import ReadOneCityController from './controllers/parking/ReadOneCityController';
//

import ReadAllParkingsController from './controllers/parking/ReadAllParkingsController';
import  ReadOneParkingController  from './controllers/parking/ReadOneParkingController';
// import { cities } from './types/cities';
// import { parkings } from './types/parkings';

const app = new Hono()

//adding static
app.use('/static/*', serveStatic({ root: './' }))
app.get('/',...HomeController)

app.get('/cities',...ReadAllCitiesControler )
app.get('/cities/:slug', ...ReadOneCityController)

app.get('/parkings', ...ReadAllParkingsController);
app.get('/parkings/:slug', ...ReadOneParkingController);

export default app
