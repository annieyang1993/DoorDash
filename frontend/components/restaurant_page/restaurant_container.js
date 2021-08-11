import { connect } from 'react-redux';

import { restaurantsList } from '../../actions/restaurant_actions';
import Restaurant from './restaurant';

const mapStateToProps = ({entities: { restaurants } }) => {
    return {
        restaurants: restaurants
    };
};

const mapDispatchToProps = dispatch => ({
    getAllRestaurants: ()=> dispatch(restaurantsList())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Restaurant);