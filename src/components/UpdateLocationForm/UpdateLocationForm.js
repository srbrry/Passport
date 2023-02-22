import React from "react"
import { useState } from "react"
import * as locationsAPI from "../../utilities/location-api"
import { Link } from 'react-router-dom';
import './UpdateLocationForm.css'

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
    }

    function handleSubmit(event) {
        event.preventDefault()
        locationsAPI.updateLocation(location, locationId)
    }

    function handleDelete() {
        locationsAPI.deleteLocation(locationId)
    }

    return (
        <div className="update-location-form-container">
            <form onSubmit={handleSubmit} id="update-location-form">
                <label>Location:</label>
                <input  
                    name = "location"
                    type = "text"
                    className= "update-location-input"
                    value = {location.location}
                    onChange = {handleChange} />
                <label>From:</label>
                <input  
                    name = "dateFrom"
                    type = "date"
                    className = "update-location-input"
                    value = {location.dateFrom}
                    onChange={handleChange} />
                <label>To:</label>
                <input 
                    name = "dateTo"
                    type = "date"
                    className = "update-location-input"
                    value = {location.dateTo}
                    onChange={handleChange} />                
                <Link to="/locations" onClick={handleSubmit}>
                    <button type="button" id="update-location-button">Update Destination</button>
                </Link>
            </form>
            <Link to="/locations">
            <button onClick={handleDelete}>Delete Trip
            </button>
            </Link>
        </div>
    )
}