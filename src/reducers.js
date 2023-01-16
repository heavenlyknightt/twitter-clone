import { combineReducers } from 'redux';

const username = (state = 'Natanael Martins', action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return action.username;
    default:
      return state;
  }
};

const bio = (state = 'Estudante de Sistemas de Informação :)', action) => {
  switch (action.type) {
    case 'SET_BIO':
      return action.bio;
    default:
      return state;
  }
};

const avatar = (state = null, action) => {
  switch (action.type) {
    case 'SET_AVATAR':
      return action.avatar;
    default:
      return state;
  }
};

const header = (state = null, action) => {
  switch (action.type) {
    case 'SET_HEADER':
      return action.header;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  username,
  bio,
  avatar,
  header
});

export default rootReducer;
