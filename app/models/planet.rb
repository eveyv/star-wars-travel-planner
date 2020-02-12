<<<<<<< HEAD
class Planet

=======
class Planet < ApplicationRecord
  validates :name, presence: true
  validates :terrain, presence: true
  validates :url, presence: true
  validates :description, presence: true
>>>>>>> f7cff81ab4541780ff25868986a152950a3e46f4
end
