class Item < ApplicationRecord
    serialize :additional_info

    belongs_to(
        :restaurant,
        class_name: 'Restaurant',
        foreign_key: :restaurant_id,
        primary_key: :id
    )
end
