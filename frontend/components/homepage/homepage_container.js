import { connect } from 'react-redux';
import * as APIUtil from '../../util/session_api_util';
import { logout } from '../../actions/session_actions';
import { restaurantsList } from '../../actions/restaurants_actions';
import {oneRestaurant } from '../../actions/restaurant_actions';
import Homepage from './homepage';

const mapStateToProps = ({ session, entities: { users, restaurants, currentRestaurant, cart} }) => {

  return {
    location: users[location],
    currentUser: users[session.id],
    restaurants: restaurants,
    currentRestaurant: currentRestaurant,
    cart: cart
  };
};

const mapDispatchToProps = dispatch => ({
  receiveLocation: (location) => dispatch(receiveLocation(location)),
  logout: () => dispatch(logout()),
  getAllRestaurants: () => dispatch(restaurantsList()),
  getCurrentRestaurant: (restaurantId) => dispatch(oneRestaurant(restaurantId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);