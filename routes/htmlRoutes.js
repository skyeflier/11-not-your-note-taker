// The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module.

const apiRoutes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
// const { readAndAppend, readFromFile } = require('../helpers/fsUtils'); //DO I NEED THIS?

// GET Route for retrieving diagnostic information
apiRoutes.get('/notes', (req, res) => {
    // GET /notes should return the notes.html file.

});

// POST Route for a error logging
apiRoutes.post('/notes', (req, res) => {
    // GET * should return the index.html file.   
});

module.exports = apiRoutes;


