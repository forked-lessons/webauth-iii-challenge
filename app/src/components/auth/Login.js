import React from 'react';
import './auth.scss';
import axios from 'axios';
class Login extends React.Component {
  state = {
    username: 'Daniel',
    password: 'test'
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit} className="auth-form">
          <label htmlFor="username" />
          <input
            className="auth-input"
            value={this.state.username}
            onChange={this.handleInputChange}
            id="username"
            type="text"
          />
          <label htmlFor="password" />
          <input
            className="auth-input"
            value={this.state.password}
            onChange={this.handleInputChange}
            id="password"
            type="password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault();

    const endpoint = 'http://localhost:5000/api/auth/login';

    axios.post(endpoint, this.state).then(res => {
      console.log('Login Response', res);

      localStorage.setItem('token', res.data.token);
    });
  };

  handleInputChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };
}

export default Login;
