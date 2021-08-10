class Items < ActiveRecord::Migration[5.2]
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.boolean :availability, null: false
      t.integer :restaurant_id, null: false
      t.decimal :price, :precision=>4, null: false
      t.timestamps
    end
    add_index :items, [:name, :restaurant_id], :unique => true
  end
end
