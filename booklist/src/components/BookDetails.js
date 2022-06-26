import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
  const { removeBook } = useContext(BookContext);
  // Ubaceno je preko prop-a jer cemo tako brisati po id-u. Ako to ne uradimo tako onda ovde moramo da lupujemo i da udarimo logiku za brisanje. Zato je jedan deo prop a drugi useContext
  return (
    <li onClick={() => removeBook(book.id)}>
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
}

export default BookDetails;