class FixColumnName < ActiveRecord::Migration[7.0]
  def change
    rename_column :users, :profile_imager, :profile_image
  end
end
