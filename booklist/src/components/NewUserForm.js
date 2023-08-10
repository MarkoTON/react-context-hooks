import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';

const NewUserForm = () => {
  const { dispatch } = useContext(UserContext);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // It's needed to be user: {}, and not book1 because we use user in bookRecucer
    dispatch({ type: 'ADD_USER', user: { name, age }});
    setName('');
    setAge('');
    document.getElementById('userTitle').focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="user name" value={name}
        onChange={(e) => setName(e.target.value)} required  id='userTitle' />
      <input type="text" placeholder="age name" value={age}
        onChange={(e) => setAge(e.target.value)} required />
      <input type="submit" value="Add user" />
    </form>
  );
}
 
export default NewUserForm;