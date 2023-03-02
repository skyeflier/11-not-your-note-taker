const express = require('express');
const fs = require('fs');
const path = require('path');
const util = require('util');

// const apiRoute = require('./routes/apiRoutes.js')
// const apiRoute = require('./routes/htmlRoutes.js')
const notes = require('./db/db.json')

// const uuid = require('Develop/db/middleware/storage.js'); //This is the middleware that creates the random id number

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "uuid"
// app.use(storage);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
);

app.get('/api/notes', (req, res) =>
    res.json(notes)
);

app.post('/api/notes', (req, res) => {
    notes.push(req.body)
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes)
});

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);