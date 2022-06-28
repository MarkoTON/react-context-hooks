import uuid from 'uuid/v4';

export const bookReducer = (state, action) => {
  console.log('Test 5')
  switch (action.type) {
    case 'ADD_BOOK':
      console.log('Test 6')
      return [...state, {
        title: action.book.title, 
        author: action.book.author, 
        id: uuid()}
      ]
    case 'REMOVE_BOOK':
      console.log('Test 7')
      return state.filter(book => book.id !== action.id);
    case 'REMOVE_ALL':
      console.log('Test 8')
      return state = [];
    default:
      console.log('Test 9')
      return state;
  }
} 