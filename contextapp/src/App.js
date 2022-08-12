import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <BookList />
    </div>
  );
}

export default App;
