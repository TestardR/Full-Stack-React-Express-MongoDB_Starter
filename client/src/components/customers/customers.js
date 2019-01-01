import React, { Component } from 'react';
import './customers.css';

class Customers extends Component {
  constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  removeCustomer(id) {
    fetch('/customers/' + id, {
      method: 'DELETE'
    }).then(res => res);

    this.setState({
      customers: this.state.customers.filter(customer => customer._id !== id)
    });
  }

  componentDidMount() {
    // proxy value in our package.json
    fetch('/customers')
      .then(res => res.json())
      .then(parsedJSON => {
        this.setState({ customers: parsedJSON.data });
        console.log(parsedJSON.data);
        console.log(this.state.customers);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h2>Customers</h2>
        <ul>
          {this.state.customers.map(customer => (
            <li key={customer._id}>
              {customer.firstName} {customer.lastName}{' '}
              <button
                onClick={e => this.removeCustomer(customer._id)}
                type="button"
              >
                {' '}
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Customers;
