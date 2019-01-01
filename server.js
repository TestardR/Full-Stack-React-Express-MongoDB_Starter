const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const mongoose = require('mongoose');
mongoose.connect(
  'mongodb://localhost/customers',
  { useNewUrlParser: true }
);

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

var customerRoutes = require('./route.js')(app);

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
