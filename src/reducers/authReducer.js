import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: ''
};

export default (state = INITIAL_STATE, action) => {
  console.log(action);
  switch (action.type) {
    case EMAIL_CHANGED:
      // * Make a new object {}
      // * Take all properties of existing state object and put them into that object {}
      // * Then define prop "email" give it an value of action.payload and then add it
      // onto that object also {}
      return { ...state, email: action.payload };

    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };

    case LOGIN_USER:
      return { ...state, loading: true, error: '' };

    case LOGIN_USER_SUCCESS:
      return { 
        ...state, 
        ...INITIAL_STATE, 
        user: action.payload 
      }; // and clear out the error message

    case LOGIN_USER_FAIL:
      return { ...state, error: 'Authentication Failed.', password: '' };

    default:
      return state;
  }
};
