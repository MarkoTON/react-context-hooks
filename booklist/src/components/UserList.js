import React, { useContext , useEffect } from 'react';
import UserDetails from './UserDetails';
import { UserContext } from '../contexts/UserContext';

const UserList = (test) => {
  console.log(test) // Nothing is pess so nothing to show just empthy {}
  const { users } = useContext(UserContext)
  console.log('Coming from UserList.js')
  console.log(users)
  const { dispatch } = useContext(UserContext)


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => dispatch({type:'SET_USERS_FROM_API', users: data}))
      .catch((error) => console.log(error));

      console.log(users);
  }, []);

  return users.length ? (
    <div className="user-list">
      <ul>
        {users.map(user => {
          return ( <UserDetails user={user} key={user.id} /> );
        })}
      </ul>
      <button onClick={()=> dispatch({type:'REMOVE_ALL'})}>Remove all</button>
    </div>
  ) : (
    <div className="empty">No users to read. Hello free time :).</div>
  );
}

export default UserList;