class AddColumnsToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :price_level, :integer
    add_column :restaurants, :description, :text
    add_column :restaurants, :img1, :string
    add_column :restaurants, :img2, :string
  end
end
