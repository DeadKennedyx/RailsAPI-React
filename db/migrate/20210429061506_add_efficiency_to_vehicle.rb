class AddEfficiencyToVehicle < ActiveRecord::Migration[6.1]
  def change
    add_column :vehicles, :efficiency, :float
  end
end
