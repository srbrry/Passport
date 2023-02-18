import { useState } from "react"
import * as locationsAPI from "../../utilities/location-api"


export default function UpdateLocationForm({ data }) {
        //assign value of location _id
    const locationId = `${data.location._id}`

    const [location, setLocation] = useState({
        location: `${data.location.location}`,
        dateFrom: `${data.location.dateFrom}`,
        dateTo: `${data.location.dateTo}`,
    })
  
    function handleChange(event) {
        setLocation({...location, [event.target.name]: event.target.value})
        console.log(location)
    }

    function handleSubmit(event) {
        event.preventDefault()

        locationsAPI.updateLocation(location, locationId)
       
    }

    function handleDelete() {
        locationsAPI.deleteLocation(locationId)
    }


    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>Location</label>
                <input  
                    name = "location"
                    type = "text"
                    value = {location.location}
                    onChange = {handleChange} />
                <label>From:</label>
                <input  
                    name = "dateFrom"
                    type = "date"
                    value = {location.dateFrom}
                    onChange={handleChange} />
                <label>To:</label>
                <input 
                    name = "dateTo"
                    type = "date"
                    value = {location.dateTo}
                    onChange={handleChange} />
                <button type="submit">Update Destination</button>
            </form>
            <button onClick={handleDelete}>You Want To Delete Me???????</button>
        </div>
    )
}