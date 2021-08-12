@items.each do |item|
    json.set! item.id do
        json.extract! item, :id, :name, :availability, :restaurant_id, :price, :section, :img, :description, :additional_info
    end
end

