import { SEARCH_LOCATION } from '../actions/greeting_actions';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SEARCH_LOCATION:
      return Object.assign({}, state, action.location);
    default:
      return state;
  }
};

export default usersReducer;
