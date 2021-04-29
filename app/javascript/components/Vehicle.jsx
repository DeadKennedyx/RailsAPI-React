import React from "react";
import { Link } from "react-router-dom";
import Table from './Table'

class Vehicle extends React.Component {
  constructor(props) {
    super(props)
    this.vin = React.createRef()
  }

  saveVehicle(){
    const token = document.querySelector('meta[name="csrf-token"]').content;
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
    .then(function(texto) {
      console.log(texto);
    })
    .catch(function(err) {
      console.log(err);
    });
  }

  render(){
    return <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
      <div className="jumbotron jumbotron-fluid bg-transparent">
        <div className="container secondary-color">
          <h1 className="display-4">Vehicle</h1>
          <p className="lead">
            Vehicle Save by VIN
          </p>
          <input type="text" ref={this.vin}/>
          <button onClick={this.saveVehicle.bind(this)}>Save</button>
        </div>
      </div>
      <Table></Table>
    </div>
  }
}

export default Vehicle
