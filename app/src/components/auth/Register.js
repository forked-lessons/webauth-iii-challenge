import React, { Component } from 'react';
import axios from 'axios';
import './auth.scss';
class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit} className="auth-form">
          <input
            className="auth-input"
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={e => this.inputChange(e)}
          />
          <input
            className="auth-input"
            type="password"
            placeholder="password"
            value={this.state.password}
            onChange={e => this.inputChange(e)}
            name="password"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const endpoint = 'http://localhost:5000/api/auth/register';

    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log('Login Response', res);
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default Register;
