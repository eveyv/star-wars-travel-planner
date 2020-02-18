class Itinerary < ApplicationRecord
  belongs_to :trip
  belongs_to :planet
end
