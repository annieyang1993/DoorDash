import * as APIUtil from '../util/session_api_util';


export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const RECEIVE_MENU = 'RECEIVE_MENU';

export const receiveRestaurant = restaurant => ({
    type: RECEIVE_RESTAURANT,
    restaurant: restaurant,
    restaurantId: parseInt(Object.keys(restaurant)[0])
})

export const receiveMenu = items => ({
    type: RECEIVE_MENU,
    menu: items
})

export const oneRestaurant = (restaurantId) => dispatch => (
    APIUtil.fetchRestaurant(restaurantId).then(restaurant=> (
        dispatch(receiveRestaurant(restaurant))
    
    ))
)

export const menu = (restaurantId) => dispatch => (
    APIUtil.fetchItems(restaurantId).then(items=>
        dispatch(receiveMenu(items))
    )
)