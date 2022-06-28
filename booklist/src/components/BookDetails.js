import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

// also {book} need to be the same name as we pass
const BookDetails = ({ book }) => {
  console.log(book);
  // dispatch need to be the same name as one we send over BookContext
  const { dispatch } = useContext(BookContext);
  // const { book1 } = useContext(BookContext);
  console.log(dispatch);
  // It will be undefined because object need to have 2 propertis type and id
  console.log(dispatch({}));
  return (
    <li onClick={() => dispatch({ type: 'REMOVE_BOOK', id: book.id })}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
}

export default BookDetails;