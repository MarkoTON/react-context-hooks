import uuid from 'uuid/v4';

export const userReducer = (state, action) => {

  switch (action.type) {
    case 'ADD_USER':
      return [...state, {
        name: action.user.name,
        age: action.user.age,
        id: uuid()
      }
      ]
    case 'SET_USERS_FROM_API':
      // if(state.users[0].id === action.users[0].id){
      //   return state
      // } else {
        return action.users
      // }
    case 'REMOVE_USER':
      return state.filter(user => user.id !== action.id);
    case 'REMOVE_ALL':
      return state = [];
    default:
      return state;
  }
} 