import React from "react";
import { Link } from "react-router-dom";
import Table from './Table'

class Vehicle extends React.Component {
  constructor(props) {
    super(props)
    this.vin = React.createRef()
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

  saveVehicle(){
    const token = document.querySelector('meta[name="csrf-token"]').content;
    const that = this
    fetch('/api/v1/vehicles', {
      method: 'POST',
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        'vehicle': {
          'vin': this.vin.current.value
        }
      })
    }).then(function(response) {
      if(response.ok) {
        return response.text()
      }else{
        throw "Error Saving Car, try again.";
      }
    })
    .then(function(data) {
      that.setState({vehicles: that.state.vehicles.concat(JSON.parse(data))})
    })
    .catch(function(err) {
      console.log(err);
    });
  }

  render(){
    return <div>
      <div className="container">
        <div>
          <div>
            <h1>Fleet.io</h1>
            <label>
              Vehicle Save by VIN
            </label>
            <input type="text" ref={this.vin}/>
            <button onClick={this.saveVehicle.bind(this)}>Save</button>
          </div>
        </div>
      </div>
      <Table vehicles={this.state.vehicles}></Table>
    </div>
  }
}

export default Vehicle
