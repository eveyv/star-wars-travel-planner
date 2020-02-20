class Trip < ApplicationRecord
  has_many :itineraries
  has_many :planets, through: :itineraries

  validates :name, presence: true
  validates :description, presence: true
end
