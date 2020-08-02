const express = require('express'); // Imports ExpressJS API Library
const path = require('path');
const cookieSession = require('cookie-session');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express(); // Creates a new instance of express

const okCode = 200; // 200 OK Status Code
const notFoundCode = 404; // 404 Not Found status code.

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(bodyParser.json()); // Use the JSON middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use(helmet.xssFilter());
app.use(helmet.frameguard());

app.use(cookieSession({
    name: 'Sabins cookie',
    maxAge: 60 * 30 * 30 * 24 * 1024,
    keys: ['rwfgjeroigjeroigjergoi']
}))

app.get('/', (request, response) => { // Handles a GET request on the '/' root route
    const requestMethod = request.method; // The request method
    const requestURL = request.url;

    if(requestMethod === 'GET' && requestURL.startsWith('/') && request.accepts('html')) {
        return response.status(okCode).sendFile(path.join(__dirname, 'views', 'index.html'));
    }
});

app.get('/personal-projects', (request, response) => { // Handles a GET request on the /personal-projects route
    const requestMethod = request.method;

    if(requestMethod === 'GET' && request.accepts('html')) {
        return response.status(okCode).sendFile(path.join(__dirname, 'views', 'projects.html'));
    }
});

app.get('/life', (request, response) => {
    const requestMethod = request.method;

    if(requestMethod === 'GET' && request.accepts('html')) {
        return response.status(okCode).sendFile(path.join(__dirname, 'views', 'life.html'));
    }
});

app.use((request, response, next) => {
    const requestMethod = request.method;

    if(requestMethod === 'GET') {
        return response.status(notFoundCode).sendFile(path.join(__dirname, 'views', '404.html'));
    }

    next();
})

app.listen(process.env.PORT || 8040), (error) => { // Listens for incoming requests
    if(!error) { // If there are no errors
        return console.log('Listening for requests on port 8040');
    }

    else {
        return console.log('Could not listen for requests');
    }
};