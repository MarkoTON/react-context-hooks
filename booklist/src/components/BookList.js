import React, { useContext } from 'react';
import BookDetails from './BookDetails';
import { BookContext } from '../contexts/BookContext';

const BookList = (test) => {
  console.log(test) // Nothing is pess so nothing to show just empthy {}
  const { books } = useContext(BookContext)
  console.log('Coming from BookList.js')
  console.log(books)
  const { dispatch } = useContext(BookContext)

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map(book => {
          return ( <BookDetails book={book} key={book.id} /> );
        })}
      </ul>
      <button onClick={()=> dispatch({type:'REMOVE_ALL'})}>Remove all</button>
    </div>
  ) : (
    <div className="empty">No books to read. Hello free time :).</div>
  );
}

export default BookList;