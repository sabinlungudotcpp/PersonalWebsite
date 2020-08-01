const express = require('express');
const path = require('path');
const cookieSession = require('cookie-session');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const okCode = 200;
const notFoundCode = 404;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(helmet.xssFilter());
app.use(helmet.frameguard());

app.get('/', (request, response) => {
    const requestMethod = request.method;
    const requestURL = request.url;

    if(requestMethod === 'GET' && requestURL.startsWith('/')) {
        return response.status(okCode).sendFile(path.join(__dirname, 'index.html'));
    }
});

app.use((request, response, next) => {
    const requestMethod = request.method;

    if(requestMethod === 'GET') {
        return response.status(notFoundCode).sendFile(path.join(__dirname, '404.html'));
    }
})

app.listen(process.env.PORT || 8040), (error) => {
    if(!error) {
        return console.log('Listening for requests on port 8040');
    }

    else {
        return console.log('Could not listen for requests');
    }
};