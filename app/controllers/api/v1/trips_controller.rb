class Api::V1::TripsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Trip.all
  end
end
