import { connect } from 'react-redux';
import Restaurant from './restaurant';
import { oneRestaurant, menu } from '../../actions/restaurant_actions';

const mapStateToProps = ({ session, entities: { users, restaurants, currentRestaurant, menu } }) => {
    return {
        location: users[location],
        currentUser: users[session.id],
        restaurants: restaurants,
        currentRestaurant: currentRestaurant,
        restaurantId: currentRestaurant["id"], 
        menuList: menu
    };
};

const mapDispatchToProps = dispatch => ({
    getCurrentRestaurant: (restaurantId) => dispatch(oneRestaurant(restaurantId)),
    menu: (restaurantId) =>dispatch(menu(restaurantId))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Restaurant);