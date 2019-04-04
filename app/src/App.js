import React, { Component } from 'react';
import './App.css';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
// import axios from 'axios';
// import UserList from './components/UserList/UserList';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     token: null,
  //     loggedIn: false,
  //     users: []
  //   };
  // }

  // authUser = token => {
  //   localStorage.setItem('token', token);
  // };

  // unAuthUser = () => {
  //   localStorage.clear();
  // };

  // logoutUser = () => {
  //   axios
  //     .get('http://localhost:5000/api/auth/logout')
  //     .then(res => {
  //       console.log('logged out');
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  // showUsers = () => {
  //   const config = {
  //     headers: {
  //       authorization: this.props.token
  //     }
  //   };
  //   axios
  //     .get('http://localhost:5000/api/users', config)
  //     .then(res => {
  //       console.log(res);
  //       this.setState({ users: res.data });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       this.setState({ error: err });
  //     });
  // };
  render() {
    // console.log(res);
    return (
      <div className="App">
        <header>
          <NavLink to="/">Home</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/login">Login</NavLink>
          &nbsp;|&nbsp;
          <NavLink to="/register">Register</NavLink>
          &nbsp;|&nbsp;
          <button onClick={this.logout}>Logout</button>
        </header>
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/login" render={pr => <Login {...pr} />} />
          <Route path="/register" component={Register} />
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
