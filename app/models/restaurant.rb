class Restaurant < ApplicationRecord
def allRestaurants
    restaurants = Restaurant.all
    return restaurants
  end
end
