const express = require('express');
const path = require('path');
const morgan = require('morgan');
const app = express();

const port = 8040;
const okCode = 200;
const notFoundCode = 404;

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

app.get('/', (request, response) => {
    const requestMethod = request.method;
    const requestURL = request.url;

    if(requestMethod === 'GET' && requestURL.startsWith('/')) {
        return response.status(okCode).send('Personal Website Homepage');
    }
});

app.listen(port, () => {
    return console.log('Listening for requests on port 8040');
});