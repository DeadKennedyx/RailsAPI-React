# Rails API with React

* Node version - v14.16.0
* Rails version - 6.1.3.1

## Setup
1. bundle
2. yarn install
3. rails db:create db:migrate

## Components

#### Backend
1. services/vehicle_attributes.rb
 - retrieves vehicle attributes from external api

3. services/vehicle_efficiency.rb
 - retrieves efficiency from external api

#### Frontend
1. javascripts/components/Table.jsx
 - renders Table component with saved vehicles

2. javascripts/components/Vehicle.jsx
 - renders form to create vehicles, and passes props to Table to update new vehicles live 
