class Itinerary < ApplicationRecord
  belongs_to :trip, null: false
  belongs_to :planet, null: false
end
