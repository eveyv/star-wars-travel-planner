class CreatePlanets < ActiveRecord::Migration[5.2]
  def change
    create_table :planets do |t|
      t.string :name, null: false
      t.string :terrain, null: false
      t.string :url, null: false
      t.string :description, null: false

      t.timestamps null: false
    end
  end
end
