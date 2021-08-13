
export const ADD_ITEM = 'ADD_ITEM';
export const CLEAR_CART = 'CLEAR_CART';


export const addItemToCart = item => ({
  type: ADD_ITEM,
  item: item,
  id: item["id"]
});

export const clearCartItems = () =>({
  type: CLEAR_CART
})