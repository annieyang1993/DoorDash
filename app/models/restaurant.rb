class Restaurant < ApplicationRecord
  has_many(
    :items,
    class_name: 'Item',
    foreign_key: :restaurant_id,
    primary_key: :id
  )

end
