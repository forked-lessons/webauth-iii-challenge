import React, { Component } from 'react';
import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import axios from 'axios';
import UserList from './components/UserList/UserList';
import { Route } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token: null
    };
  }
  authUser = token => {
    localStorage.setItem('token', token);
  };

  unAuthUser = () => {
    localStorage.clear();
  };

  logoutUser = () => {
    axios
      .get('http://localhost:5000/api/auth/logout')
      .then(res => {
        console.log('logged out');
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Route
          path="/"
          render={pr => <Login authUser={this.authUser} {...pr} />}
        />

        <Route path="/" render={pr => <Register {...pr} />} />
        {/*
          <button
            onClick={e => {
              e.preventDefault();
              this.logoutUser();
            }}
          >
            Logout
          </button> */}

        <Route
          path="/"
          render={pr => <UserList token={this.state.token} {...pr} />}
        />
      </div>
    );
  }
}

export default App;
