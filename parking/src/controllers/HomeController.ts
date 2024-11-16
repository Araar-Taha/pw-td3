import { createFactory } from 'hono/factory'
import { html, raw } from 'hono/html'
// import home01 from '../../static/parking.png's


const factory = createFactory();



const HomeController = factory.createHandlers((c) => {
    return c.html(html`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Welcome to EuroPark</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;700&display=swap"
            rel="stylesheet"
          />
          <style>
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }
  
            body {
              font-family: 'Roboto', sans-serif;
              background-color: #f4f4f9;
              color: #333;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              padding: 20px;
            }
  
            h1 {
              font-size: 2.5rem;
              color: #007bff;
              margin-bottom: 20px;
              text-align: center;
            }
  
            img {
              max-width: 100%;
              height: 400px;
              border-radius: 10px;
              margin: 20px 0;
              transition: 0.5s
            }
              img:hover {
              max-width: 100%;
              height: 400px;
              border-radius: 10px;
              margin: 20px 0;
              box-shadow: 5px 10px 50px;
              transition: 0.5s;
            }
  
            p {
              font-size: 1.2rem;
              line-height: 1.6;
              color: #555;
              text-align: center;
              max-width: 1000px;
              margin-bottom: 30px;
            }
  
            nav {
              margin-top: 20px;
              text-align: center;
            }
  
            nav a {
              text-decoration: none;
              font-size: 1rem;
              color: #ffffff;
              background-color: #007bff;
              padding: 10px 20px;
              border-radius: 5px;
              margin: 0 10px;
              transition: background-color 0.3s ease;
            }
  
            nav a:hover {
              background-color: #0056b3;
              transition: 0.2 s
            }
  
            nav a:active {
              transform: scale(0.95);
            }
          </style>
        </head>
        <body>
          <h1>Welcome to EuroPark</h1>
          <img src="/static/parking.png" alt="Parking Image" />
          <p>
            Save time and money with EuroPark! Enjoy a 100% contactless parking
            experience for a short or long duration in our car parks across Europe!
          </p>
          <nav>
            <a href="/cities">Our Cities</a>
            <a href="/parkings">Our Car Parks</a>
          </nav>
        </body>
      </html>
    `);
  });
  

export default HomeController;