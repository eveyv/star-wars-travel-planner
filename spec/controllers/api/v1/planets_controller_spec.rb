require 'rails_helper'


RSpec.describe Api::V1::PlanetsController, type: :controller do

  describe "GET#index" do
    let!(:user) { User.create(
      id:1,
      email:"email1@email.com",
      password:"123456"
      ) }
    let!(:first_planet) { Planet.create(
      name: 'Tatooine',
      terrain: 'Desert',
      planet_url: 'https://en.wikipedia.org/wiki/Tatooine#/media/File:Tatooine_(fictional_desert_planet).jpg',
      description: 'i dont like sand its coarse and rough',
      destination_url: 'https://www.google.com'
      ) }
    let!(:second_planet) { Planet.create(
      name: 'Mustafar',
      terrain: 'Lava',
      planet_url: 'https://vignette.wikia.nocookie.net/starwars/images/d/d1/Hoth.jpg/revision/latest?cb=20071019040631',
      description: 'fire burning on the dance floor',
      destination_url: 'https://www.google.com'
      ) }

    it "should return the planets" do
      get :index
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(returned_json.length).to eq 2

      expect(returned_json[0]["name"]).to eq 'Tatooine'
      expect(returned_json[0]["terrain"]).to eq 'Desert'
      expect(returned_json[0]["planet_url"]).to eq 'https://en.wikipedia.org/wiki/Tatooine#/media/File:Tatooine_(fictional_desert_planet).jpg'
      expect(returned_json[0]["description"]).to eq 'i dont like sand its coarse and rough'
      expect(returned_json[0]["destination_url"]).to eq 'https://www.google.com'

      expect(returned_json[1]["name"]).to eq 'Mustafar'
      expect(returned_json[1]["terrain"]).to eq 'Lava'
      expect(returned_json[1]["planet_url"]).to eq 'https://vignette.wikia.nocookie.net/starwars/images/d/d1/Hoth.jpg/revision/latest?cb=20071019040631'
      expect(returned_json[1]["description"]).to eq 'fire burning on the dance floor'
      expect(returned_json[1]["destination_url"]).to eq 'https://www.google.com'

    end
  end

end
