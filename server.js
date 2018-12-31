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

// app.get('/api/customers', (req, res) => {
//   const customers = [
//     { id: 1, firstName: 'Romain', lastName: 'Testard' },
//     { id: 2, firstName: 'Vanessa', lastName: 'Renaud' },
//     { id: 3, firstName: 'William', lastName: 'Schwartz' },
//     { id: 4, firstName: 'Martin', lastName: 'Jay' }
//   ];

//   res.json(customers);
// });

var customerRoutes = require('./route.js')(app);

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
