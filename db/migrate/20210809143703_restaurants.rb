class Restaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :phone, null: false
      t.decimal :latitude, :precision=>64, :scale=>12, null: false
      t.decimal :longitude, :precision=>64, :scale=>12, null: false
      t.timestamps
    end
    add_index :restaurants, [:name, :latitude, :longitude], :unique => true
  end
end
