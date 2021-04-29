import React from "react";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicles: []
    };
  }

  componentDidMount() {
    const url = "/api/v1/vehicles";
    fetch(url).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Error retrieving vehicles");
    }).then(response => {
      this.setState({ vehicles: response })
    });
  }

  renderTableData() {
   return this.state.vehicles.map((vehicle, index) => {
      return (
        <tr key={vehicle.id}>
          <td>{vehicle.vin}</td>
          <td>{vehicle.color}</td>
          <td>{vehicle.vehicle_type}</td>
        </tr>
      )
    })
  }

  render() {
    return <table id='vehicles'>
       <tbody>
          {this.renderTableData()}
       </tbody>
    </table>
  }
}
export default Table;
