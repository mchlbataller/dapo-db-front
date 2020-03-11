import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Rb from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: [] };
  }

  callAPI() {
    let self = this;
    fetch('http://localhost:9000/db', {
      method: 'GET'
    }).then(function (response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then(function (res) {
      self.setState({ apiResponse: res });
    }).catch(err => {
      console.log('caught it!', err);
    })
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {
    return (
      <React.Fragment>
      <Rb.Jumbotron>
        <h1>Asd</h1>
      </Rb.Jumbotron>

      <Rb.Table striped bordered hover>
        <thead>
          <tr>
            <th>userIndex</th>
            <th>Activity</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th>Weather</th>
            <th>Humidity</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {this.state.apiResponse.map((member) =>
            <tr>
              <td>{member.userIndex}</td>
              <td>{member.activityDescription}</td>
              <td>{member.latitude}</td>
              <td>{member.longitude}</td>
              <td>{member.weather}</td>
              <td>{member.humidity}</td>
              <td>{member.temperature}</td>
              <td>{member.pressure}</td>
              <td>{member.created_at}</td>
            </tr>
          )}
        </tbody>
      </Rb.Table>
      </React.Fragment>
    );
  }
}

export default App;
