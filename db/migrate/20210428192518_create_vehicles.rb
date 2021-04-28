class CreateVehicles < ActiveRecord::Migration[6.1]
  def change
    create_table :vehicles do |t|
      t.string :vin
      t.string :color
      t.string :status
      t.string :vehicle_type

      t.timestamps
    end
  end
end
