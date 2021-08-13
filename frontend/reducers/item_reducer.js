import { RECEIVE_ITEM} from '../actions/restaurant_actions';


const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ITEM:
      return Object.assign({}, action.currentItem);
    default:
      return state;
  }
};

export default itemReducer;