import React, { createContext, useEffect, useReducer, useState } from "react";
import { userReducer } from "../reducers/userReducer";

export const UserContext = createContext()

const UserContextProvider = (props) => {
  const [usersLoaded, setUsersLoaded] = useState(false);
  const [users, dispatch] = useReducer(userReducer, [], () => {
    const localData = localStorage.getItem('users');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    if (!usersLoaded) {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: 'SET_USERS_FROM_API', users: data });
          setUsersLoaded(true); // Mark data as loaded
        })
        .catch((error) => console.log(error));
    }
  }, [usersLoaded]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  return (
    <UserContext.Provider value={{ users, dispatch }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;