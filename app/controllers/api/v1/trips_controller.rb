class Api::V1::TripsController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Trip.all
  end

  def create
    trip = Trip.new(trip_params)
    trip.user = current_user
    if trip.save
      render json: { trips: trip }
    else
      render json: { error: trip.errors.full_messages }, status: :unprocessable_entity
    end
  end



end
