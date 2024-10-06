import { Hono } from 'hono'
import HomeController from './controllers/HomeController'
import { serveStatic } from 'hono/bun'
import { cities } from './types/cities';
import { parkings } from './types/parkings';
import ReadAllCitiesControler from './controllers/parking/ReadAllCitiesController';


const app = new Hono()

//adding static
app.use('/static/*', serveStatic({ root: './' }))
app.get('/',...HomeController)
app.get('/cities',...ReadAllCitiesControler )

export default app
