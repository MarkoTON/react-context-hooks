import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

// also {book} need to be the same name as we pass
const UserDetails = ({ user }) => {
  console.log(user);
  // dispatch need to be the same name as one we send over UserContext
  const { dispatch } = useContext(UserContext);
  // const { book1 } = useContext(UserContext);
  console.log(dispatch);
  // It will be undefined because object need to have 2 propertis type and id
  console.log(dispatch({}));
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_USER', id: user.id })}>
      <div className="name">{user.name}</div>
      <div className="age">{user.age}</div>
    </li>
  );
}

export default UserDetails;