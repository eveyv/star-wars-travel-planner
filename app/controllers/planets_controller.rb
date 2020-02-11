class PlanetsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def show
    render json: Planet.all
  end
end
