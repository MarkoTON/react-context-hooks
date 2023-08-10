import React from 'react';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';
import BookList from './components/BookList';
import NewBookForm from './components/NewBookForm';
import UserList from './components/UserList';
import NewUserForm from './components/NewUserForm';
import UserContextProvider from './contexts/UserContext';

function App() {

  return (
    <div className="App">
      <BookContextProvider>
      <UserContextProvider>
        <Navbar />
        <BookList />
        <UserList />
        <NewBookForm />
        <NewUserForm />
      </UserContextProvider>
      </BookContextProvider>
    </div>
  );
}

export default App;
