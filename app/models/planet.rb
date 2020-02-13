class Planet < ApplicationRecord
  validates :name, presence: true
  validates :terrain, presence: true
  validates :planet_url, presence: true
  validates :description, presence: true
end
