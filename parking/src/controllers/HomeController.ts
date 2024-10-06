import { createFactory } from 'hono/factory'
import { html, raw } from 'hono/html'
// import home01 from '../../static/parking.png's


const factory = createFactory();



const HomeController = factory.createHandlers( (c) => {
    return c.html(html`
        <link rel="stylesheet"
href="https://fonts.googleapis.com/css?family=Roboto:300,300it
alic,700,700italic" />
<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/n
ormalize.css" />
<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/m
illigram.css" />

        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to EuroPark</title>
</head>
<body>
    <h1>Welcome to EuroPark</h1>
    <img src="/static/parking.png" alt="Parking Image">
    <p>
        Save time and money with EuroPark! Enjoy a 100% contactless parking
        experience for a short or long duration in our car parks in Europe!
    </p>
    <nav>
        <a href="/cities">Our Cities</a> |
        <a href="/parkings">Our Car Parks</a>
    </nav>
</body>
</html>
`)
})

export default HomeController;