import React, { useEffect, useState } from 'react';
import axios from 'axios';
import requiresAuth from '../auth/requireAuth';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(e => {
    const endpoint = `/users`;
    axios
      .get(endpoint)
      .then(res => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch(error => {
        console.log('USERS ERROR');
      });
  }, []);
  // };
  return (
    <>
      <h2>List of Users</h2>

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </>
  );
};

export default requiresAuth(Users);
// export default Users;
