import React from "react"
import Table from './Table'

const VEHICLES_ENDPOINT = `/api/v1/vehicles`
const token = document.querySelector('meta[name="csrf-token"]').content

const saveVehicle = async (vin) => {
  try {
    const options = {
      method: 'POST',
      headers: {
      "X-CSRF-Token": token,
      "Content-Type": "application/json" // not usually needed
      },
      body: JSON.stringify({
       'vehicle': {
         'vin': vin
       }
     })
    }
    const response = await fetch(VEHICLES_ENDPOINT, options)

    return await response.json()
  } catch (exception) {
    console.error(exception)
  }
}

const getVehicles = async () => {
  try {
    const response = await fetch(VEHICLES_ENDPOINT)
    const vehicles = await response.json()
    return vehicles
  } catch(exception) {
    console.error(exception)
  }
}

const Vehicle = () => {
    const vin = React.useRef()
    const [vehicles, setVehicles] = React.useState([])
    const onClick = async () => {
      const vehicle = await saveVehicle(vin.current.value)
      if (vehicle)
        setVehicles([...vehicles, vehicle])
    }

    const onMount = async () => {
      const vehicles = await getVehicles()
      if (vehicles) {
        setVehicles(vehicles)
      }
    }

    React.useEffect(() => {
      onMount()
    }, [])

    return (
    <div>
      <div className="container">
        <div>
          <div>
            <h1>Fleet.io</h1>
            <label>
              Vehicle Save by VIN
            </label>
            <input type="text" ref={vin}/>
            <button onClick={onClick}>Save</button>
          </div>
        </div>
      </div>
      <Table vehicles={vehicles}></Table>
    </div>
  )
}

export default Vehicle
