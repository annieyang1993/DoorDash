import { combineReducers } from 'redux';


import usersReducer from './users_reducer';
import locationReducer from './location_reducer'
import restaurantsReducer from './restaurants_reducer'
import restaurantReducer from './restaurant_reducer'
import menuReducer from './menu_reducer'

export default combineReducers({
  users: usersReducer,
  location: locationReducer,
  restaurants: restaurantsReducer,
  currentRestaurant: restaurantReducer,
  menu: menuReducer
});
