import React, { useContext } from 'react';
import UserDetails from './UserDetails';
import { UserContext } from '../contexts/UserContext';

const UserList = () => {
  const { users } = useContext(UserContext)
  const { dispatch } = useContext(UserContext)

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