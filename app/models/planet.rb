class Planet < ApplicationRecord
  has_many :itineraries
  has_many :trips, through: :itineraries

  validates :name, presence: true
  validates :terrain, presence: true
  validates :planet_url, presence: true
  validates :description, presence: true
end
