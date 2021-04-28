class Vehicle < ApplicationRecord
  validates_uniqueness_of :fleet_id
end
