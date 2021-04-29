class Vehicle < ApplicationRecord
  validates_uniqueness_of :fleet_id
  validates_presence_of :fleet_id
end
