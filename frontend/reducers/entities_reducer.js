import { combineReducers } from 'redux';


import usersReducer from './users_reducer';
import locationReducer from './location_reducer'

export default combineReducers({

  users: usersReducer,
  location: locationReducer
});
