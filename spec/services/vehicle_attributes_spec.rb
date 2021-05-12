require 'rails_helper'

RSpec.describe VehicleAttributes do
  describe 'get' do
    let(:vehicles) { VehicleAttributes.new("123").get }

    it "returns vehicle attributes", :vcr do
      expect(vehicles).to be_kind_of(Hash)
      expect(vehicles).to have_key(:vin)
      expect(vehicles).to have_key(:color)
      expect(vehicles).to have_key(:status)
      expect(vehicles).to have_key(:vehicle_type)
      expect(vehicles).to have_key(:fleet_id)
    end
  end
end
