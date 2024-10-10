import { Hono } from 'hono'
import HomeController from './controllers/HomeController'
import { serveStatic } from 'hono/bun'
import ReadAllCitiesControler from './controllers/parking/ReadAllCitiesController';
import ReadOneCityController from './controllers/parking/ReadOneCityController';
// import { cities } from './types/cities';
// import { parkings } from './types/parkings';

const app = new Hono()

//adding static
app.use('/static/*', serveStatic({ root: './' }))
app.get('/',...HomeController)
app.get('/cities',...ReadAllCitiesControler )
app.get('/cities/:slug', ...ReadOneCityController)

export default app
