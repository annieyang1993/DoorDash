class AddAdditionalInfoToItems < ActiveRecord::Migration[5.2]
  def change
    add_column :items, :additional_info, :text
  end
end
