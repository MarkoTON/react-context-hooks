import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

// also {book} need to be the same name as we pass
const UserDetails = ({ user }) => {
  const { dispatch } = useContext(UserContext);
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_USER', id: user.id })}>
      <div className="name">{user.name}</div>
      <div className="age">{user.age}</div>
    </li>
  );
}

export default UserDetails;