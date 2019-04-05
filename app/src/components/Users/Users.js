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
        setUsers(res.data);
        // console.log(res.data);
      })
      .catch(error => {
        console.error('USERS ERROR', error);
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
