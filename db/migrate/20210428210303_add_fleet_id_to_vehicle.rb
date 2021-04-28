class AddFleetIdToVehicle < ActiveRecord::Migration[6.1]
  def change
    add_column :vehicles, :fleet_id, :integer, unique: true
  end
end
