const express = require('express');
const fs = require('fs');
const path = require('path');
const util = require('util');

const notes = require('./db/db.json')

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

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
    req.body.id = Math.floor(Math.random() * 1000000)
    notes.push(req.body)
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes)
});

app.delete('/api/notes/:id', (req, res) => {
    for (let i = 0; i < notes.length; i++) {
        if (req.params.id == notes[i].id) {
            notes.splice(i, 1)
        }
    }
    fs.writeFileSync('./db/db.json', JSON.stringify(notes))
    res.json(notes)
});

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);