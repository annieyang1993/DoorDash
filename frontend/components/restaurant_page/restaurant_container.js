import { connect } from 'react-redux';
import Restaurant from './restaurant';
import { oneRestaurant, menu, getItem, modalStatus } from '../../actions/restaurant_actions';

const mapStateToProps = ({ session, entities: { users, restaurants, currentRestaurant, menu, currentItem, modalStatus } }) => {
    return {
        location: users[location],
        currentUser: users[session.id],
        restaurants: restaurants,
        currentRestaurant: currentRestaurant,
        restaurantId: currentRestaurant["id"], 
        menuList: menu,
        currentItem: currentItem,
        modalStatus: modalStatus
    };
};

const mapDispatchToProps = dispatch => ({
    getCurrentRestaurant: (restaurantId) => dispatch(oneRestaurant(restaurantId)),
    menu: (restaurantId) =>dispatch(menu(restaurantId)),
    getItem: (restaurantId, itemId) => dispatch(getItem(restaurantId, itemId)),
    setModal: (bool) => dispatch(modalStatus(bool))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Restaurant);