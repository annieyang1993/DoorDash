import { RECEIVE_MENU } from '../actions/restaurant_actions';


const menuReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MENU:
      return Object.assign({}, action.menu);
    default:
      return state;
  }
};

export default menuReducer;