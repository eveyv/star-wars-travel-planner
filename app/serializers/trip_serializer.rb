class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :planets

  has_many :planets

end
