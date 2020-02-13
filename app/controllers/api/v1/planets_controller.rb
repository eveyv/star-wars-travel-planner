class Api::V1::PlanetsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Planet.all
  end

  def show
    planet = Planet.find(params[:id])
    render json: planet
  end

end
