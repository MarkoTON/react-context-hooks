import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // It's needed to be book: {}, and not book1 because we use book in bookRecucer
    dispatch({ type: 'ADD_BOOK', book: { title, author }});
    setTitle('');
    setAuthor('');
    document.getElementById('bookTitle').focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="book title" value={title}
        onChange={(e) => setTitle(e.target.value)} required  id='bookTitle' />
      <input type="text" placeholder="author name" value={author}
        onChange={(e) => setAuthor(e.target.value)} required />
      <input type="submit" value="Add book" />
    </form>
  );
}
 
export default NewBookForm;