const express = require('express');
const fs = require('fs');
// const path = require('path');
const util = require('util');

const apiRoute = require('./routes/apiRoutes.js')
const apiRoute = require('./routes/htmlRoutes.js')

const uuid = require('Develop/db/middleware/uuid.js'); //This is the middleware that creates the random id number

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "uuid"
app.use(uuid);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//http://localhost:3001/api
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

// // Wildcard route to direct users to a 404 page
// app.get('*', (req, res) =>
//     res.sendFile(path.join(__dirname, 'public/pages/404.html'))
// );

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);