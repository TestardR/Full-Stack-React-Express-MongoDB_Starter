const _ = require('lodash');
const Customer = require('./model.js');

module.exports = app => {
  // Create
  app.post('/customers', (req, res) => {
    const newCust = new Customer(req.body);
    newCust.save(err => {
      if (err) {
        res.json({ info: 'error during customer creation', error: err });
      }
      res.json({ info: 'customer created successfully' });
    });
  });

  // Read
  app.get('/customers', (req, res) => {
    Customer.find((err, customers) => {
      if (err) {
        res.json({ info: 'error during find customers', error: err });
      }
      res.json({ info: 'Customers found successfully', data: customers });
    });
  });

  // Read one
  app.get('/customers/:id', (req, res) => {
    Customer.findById(req.params.id, (err, customer) => {
      if (err) {
        res.json({ info: 'error during find customer', error: err });
      }
      if (customer) {
        res.json({ info: 'customer found successfully', data: customer });
      } else {
        res.json({ info: 'customer not found' });
      }
    });
  });

  // Update
  app.put('/customers/:id', (req, res) => {
    Customer.findById(req.params.id, (err, customer) => {
      if (err) {
        res.json({ info: 'error during find customer', error: err });
      }
      if (customer) {
        _.merge(customer, req.body);
        customer.save(err => {
          if (err) {
            res.json({ info: 'error during customer udpate', error: err });
          }
          res.json({ info: 'customer updated successfully' });
        });
      } else {
        res.json({ info: 'customer not found' });
      }
    });
  });

  // Delete
  app.delete('/customers/:id', (req, res) => {
    Customer.findByIdAndRemove(req.params.id, err => {
      if (err) {
        res.json({ info: 'error during remove customer', error: err });
      }
      res.json({ info: 'customer removed successfully' });
    });
  });
};
