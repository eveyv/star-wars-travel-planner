class CreateItineraries < ActiveRecord::Migration[5.2]
  def change
    create_table :itineraries do |t|
      t.belongs_to :planet, null: false
      t.belongs_to :trip, null: false

      t.timestamps null: false
    end
  end
end
