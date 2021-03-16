// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

const noteData = require('../db/db.json');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid')

// ROUTING

module.exports = (app) => {
  // API GET Requests
  

  app.get('/api/notes', (req, res) => res.json(noteData));


 
  //API POST Requests


  app.post('/api/notes', (req, res) => {
    req.body['id'] = uuidv4();
    noteData.push(req.body);
    fs.writeFileSync("./db/db.json", JSON.stringify(noteData));
      
});

  //API DELETE Requests

app.delete('/api/notes/:id', (req, res) => {
  
  fs.writeFileSync("./db/db.json", JSON.stringify(noteData));
})

};
