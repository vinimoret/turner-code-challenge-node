import React, { Component } from 'react';

import logo from './logo.svg';
import './dashboard.css';

class DashboardPage extends Component {
  constructor(props: {}) {
    super(props);
    this.testAPI = this.testAPI.bind(this);
  }
  state = {
    results: '',
  };
  testAPI() {
    fetch('./api/')
      .then(resp => resp.json())
      .then(res => this.setState({ results: res.greeting }))
      .catch(err => console.log(err));
  }

  render() {
    const { results } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default DashboardPage;
