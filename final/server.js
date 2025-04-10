const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const mongodb = require('./database/connect');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
require('dotenv').config();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware for parsing requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cors());
app.use(express.json());

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Routes
app.use('/', require('./routes'));

// Node Express Initializer / Listener
mongodb.initDb((err, mongodb) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on http://localhost:${port}`);
  }
});
