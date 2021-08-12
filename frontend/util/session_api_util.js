export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);

///MOVE THIS FUNCTIOn
export const restaurants = ()=>{
  return(
  $.ajax({
    method: 'GET',
    url: '/api/restaurants',
  }))
}

export const fetchRestaurant = restaurantId => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/restaurants/${restaurantId}/`,
    }))
}

export const fetchItems = (restaurantId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/restaurants/${restaurantId}/items`,
    })
  )
}

export const fetchItem = (restaurantId, itemId) => {
  return (
    $.ajax({
      method: 'GET',
      url: `/api/restaurants/${restaurantId}/items/${itemId}`
    })
  )
}