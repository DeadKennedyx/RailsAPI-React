class VehicleController < ApplicationController
  def index
    vehicles = Vehicle.all.order(created_at: :desc)
    render json: vehicles
  end

  def create
    vehicle = Vehicle.create(VehicleAttributes.new(vehicle_params[:vin]).get)

    if vehicle.valid?
      render json: vehicle
    else
      render json: vehicle.errors, status: :bad_request
    end
  end

  private

  def vehicle_params
    params.require(:vehicle).permit(:vin)
  end
end
