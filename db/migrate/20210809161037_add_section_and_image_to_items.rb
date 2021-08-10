class AddSectionAndImageToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :section, :string
    add_column :items, :img, :string
  end
end
