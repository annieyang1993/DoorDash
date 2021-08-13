import { MODAL_STATUS} from '../actions/restaurant_actions';


const itemReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case MODAL_STATUS:
      return Object.assign({}, {["modalStatus"]: action.modalStatus});
    default:
      return state;
  }
};

export default itemReducer;