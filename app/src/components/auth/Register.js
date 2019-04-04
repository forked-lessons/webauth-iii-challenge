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
        <form onSubmit={this.handleSubmit}>
          <h1>Register</h1>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={this.state.username}
            onChange={e => this.inputChange(e)}
          />
          <input
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
//   registerUser = () => {
//     axios
//       .post('http://localhost:5000/api/auth/register', {
//         username: this.state.username,
//         password: this.state.password
//       })
//       .then(res => {
//         console.log('registered');
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };
// }

export default Register;
