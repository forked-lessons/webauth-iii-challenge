import React, { useState } from 'react';
import './auth.scss';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const endpoint = 'http://localhost:5000/api/auth/login';
    axios.post(endpoint, { username, password }).then(res => {
      console.log('Login Response', res);
      localStorage.setItem('token', res.data.token);
    });
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="auth-form">
        <label htmlFor="username" />
        <input
          className="auth-input"
          value={username}
          onChange={e => setUsername(e.target.value)}
          id="username"
          type="text"
        />
        <label htmlFor="password" />
        <input
          className="auth-input"
          value={password}
          onChange={e => setPassword(e.target.value)}
          id="password"
          type="password"
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
