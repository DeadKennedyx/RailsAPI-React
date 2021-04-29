class Vehicle < ApplicationRecord
  validates_uniqueness_of :fleet_id
  validates_presence_of :fleet_id
  before_save :vehicle_efficiency

  def vehicle_efficiency
    self.efficiency = VehicleEfficiency.new(self.fleet_id).get
  end
end
