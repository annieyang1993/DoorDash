import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { restaurantsList } from '../../actions/restaurant_actions';
import Homepage from './homepage';

const mapStateToProps = ({ session, entities: { users, restaurants} }) => {

  return {
    location: users[location],
    currentUser: users[session.id],
    restaurants: restaurants
  };
};

const mapDispatchToProps = dispatch => ({
  receiveLocation: (location) => dispatch(receiveLocation(location)),
  logout: () => dispatch(logout()),
  getAllRestaurants: () => dispatch(restaurantsList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);