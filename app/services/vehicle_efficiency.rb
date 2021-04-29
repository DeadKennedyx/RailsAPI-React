class VehicleEfficiency
  require 'httparty'

  def initialize vehicle_id
    @vehicle_id = vehicle_id
  end

  def get
    url = "https://secure.fleetio.com/api/v1/vehicles/#{@vehicle_id}/fuel_entries"

    headers = {
      'Authorization': "Token 635d9bf526682e02ab8abcf05b00561d50de8142",
      'Account-Token': "798819214b"
    }

    response = HTTParty.get(url, headers: headers)

    fuel_entry = JSON.parse(response.body).last

    if miles_and_gallons fuel_entry
      fuel_entry['usage_in_mi'].to_f / fuel_entry['us_gallons'].to_f
    end
  end

  private

  def miles_and_gallons fuel_entry
    fuel_entry && fuel_entry['usage_in_mi'] && fuel_entry['us_gallons']
  end
end
