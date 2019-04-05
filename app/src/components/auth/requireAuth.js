import React from 'react';
import axios from 'axios';
// import swal from 'sweetalert';
axios.defaults.baseURL = 'http://localhost:5000/api';

axios.interceptors.request.use(config => {
  config.headers.authorization = localStorage.getItem('token');
  return config;
});

// axios.interceptors.response.use(function(error) {
//   // Do something with response error
//   if (error.response.status === 401) {
//     swal({
//       title: 'Login session expired',
//       text: 'You will now be directed to the login page to login again',
//       type: 'info'
//       // ,
//       // function() {
//       //   history.location.push("/login");
//     });
//   } else {
//     return Promise.reject(error);
//   }
// });

export default function(Component) {
  return class Authenticated extends React.Component {
    render() {
      const token = localStorage.getItem('token');
      const notLoggedIn = <h3>Please log in</h3>;
      return <> {token ? <Component {...this.props} /> : notLoggedIn}</>;
    }
  };
}
