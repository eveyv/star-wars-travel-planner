class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :planet_name


  def planet_name
    emptyArray = []
    object.planets.each do |planet|
      emptyArray << planet.name
    end
    return emptyArray
  end

end
