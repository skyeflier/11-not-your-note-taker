const apiRoutes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils'); //DO I NEED THIS?

// GET Route for retrieving diagnostic information
apiRoutes.get('/api/notes', (req, res) => {
    // TODO: Logic for sending all the content of db.json
    // GET /api/notes should read the db.json file and return all saved notes as JSON.

});

// POST Route for a error logging
apiRoutes.post('/api/notes', (req, res) => {
    // TODO: Logic for appending data to the db.json file
    // POST /api/notes should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
});

module.exports = apiRoutes;


