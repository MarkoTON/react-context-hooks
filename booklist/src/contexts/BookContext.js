import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  console.log('Test 1')
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    console.log('Start from arrow funcion in useReducer');
    const localData = localStorage.getItem('books');
    return localData ? JSON.parse(localData) : [];
  });
  console.log('Test 2')
  useEffect(() => {
    console.log('Test 3')
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);
  console.log('Test 4')
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;