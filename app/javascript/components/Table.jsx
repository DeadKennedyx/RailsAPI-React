import React from "react";

class Table extends React.Component {
  constructor(props) {
    super(props);
  }

  renderTableData() {
   return this.props.vehicles.map((vehicle, index) => {
      return (
        <tr key={vehicle.id}>
          <td>{vehicle.vin}</td>
          <td>{vehicle.color}</td>
          <td>{vehicle.vehicle_type}</td>
          <td>{vehicle.efficiency}</td>
        </tr>
      )
    })
  }

  render() {
    return <table id='vehicles'>
       <thead>
         <tr>
          <td>Vin</td>
          <td>Color</td>
          <td>Vehicle Type</td>
          <td>Vehicle Efficiency(gallons/miles)</td>
         </tr>
       </thead>
       <tbody>
          {this.renderTableData()}
       </tbody>
    </table>
  }
}
export default Table;
