// Dependencies

const express = require('express');

// Sets up the Express App
const app = express();

// PORT setup
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTER: Points server to route files
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

