import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Users from './components/Users/Users';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <NavLink to="/">Home</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/login">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/register">Register</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/users">Users</NavLink>
          &nbsp;|&nbsp;
          <button onClick={this.logout}>Logout</button>
        </header>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/login" render={pr => <Login {...pr} />} />
          <Route path="/register" component={Register} />
          <Route path="/users" component={Users} />
        </main>
      </div>
    );
  }
  logout = () => {
    localStorage.removeItem('token');
  };
}

function Home(props) {
  return <h1>Home Component</h1>;
}

export default App;
