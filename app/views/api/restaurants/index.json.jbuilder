
@restaurants.each do |restaurant|
    json.set! restaurant.id do
        json.extract! restaurant, :id, :name, :email, :phone, :latitude, :longitude, :price_level, :description, :img1, :img2
    end
end

