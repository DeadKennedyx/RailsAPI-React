require 'rails_helper'

RSpec.describe VehicleEfficiency do
  describe 'get' do
    it "Returns Vehicle Efficiency", :vcr do
      expect(VehicleEfficiency.new("168").get).to be(13.767258382642996)
    end
    it "Returns nil if data is not complete", :vcr do
      expect(VehicleEfficiency.new("1416468").get).to be_nil
    end
  end
end
