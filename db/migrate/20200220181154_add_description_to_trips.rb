class AddDescriptionToTrips < ActiveRecord::Migration[5.2]
  def change
    add_column :trips, :description, :string, null: false
  end
end
