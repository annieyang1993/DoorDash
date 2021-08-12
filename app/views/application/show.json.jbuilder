json.set! @restaurant.id do
    json.extract! @restaurant, :name, :email, :phone, :latitude, :longitude, :price_level, :description, :img1, :img2
end

