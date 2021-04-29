class VehicleAttributes
  require 'httparty'

  def initialize vin
    @vin = vin
  end

  def get
    url = "https://secure.fleetio.com/api/v1/vehicles?q[vin_eq]=#{@vin}"

    headers = {
      'Authorization': "Token 635d9bf526682e02ab8abcf05b00561d50de8142",
      'Account-Token': "798819214b"
    }

    response = HTTParty.get(url, headers: headers)

    vehicle = JSON.parse(response.body).first

    unless vehicle.nil?
      { vin: vehicle['vin'],
        color: vehicle['vehicle_status_color'],
        status: vehicle['vehicle_status_name'],
        vehicle_type: vehicle['vehicle_type_name'],
        fleet_id: vehicle['id'] }
    end
  end
end
