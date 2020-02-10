class Api::V1::ImagesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }
  
def index
  planetInfo = []

  parsed_response = JSON.parse(response.body)

  parsed_response["data"].each do |planet|
    planetInfo << planet
  end
end
