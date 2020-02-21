require 'pry'
class Api::V1::TripsController < ApplicationController
  before_action :authenticate_user!, only: [:create, :destroy, :update]

  def index
    render json: Trip.all
  end

  def show
    trip = Trip.find(params[:id])
    render json: trip
  end

  def create
    trip = Trip.new(trip_params)
    if trip.save
      render json: { trips: trip }
    else
      render json: { error: trip.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def trip_params
    params.permit(:name, :description)
  end

  def authorize_user
    if !user_signed_in?
      raise ActionController::RoutingError.new("Sign In Please")
    end
  end
end
