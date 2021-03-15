// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.

const noteData = require('../db/db.json');
const path = require('path');
const fs = require('fs');
const uuid = require('uuid');

// ROUTING

module.exports = (app) => {
  // API GET Requests
  

  app.get('/api/notes', (req, res) => {
    let noteData = fs.readFileSync(".db/db.json");
    noteData = JSON.parse(noteData);
    res.json(noteData)

  });


  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post('/api/notes', (req, res) => {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    let noteData = fs.readFileSync(".db/db.json");
    noteData = JSON.parse(noteData);
    req.body.id = uuid();
    noteData.push(req.body);
    fs.writeFileSync(".db/db.json", JSON.stringify(noteData));
    res.end();
      
});


  //app.post('/api/clear', (req, res) => {
    // Empty out the arrays of data
    //tableData.length = 0;
    //waitListData.length = 0;

    //res.json({ ok: true });
  //});
};
