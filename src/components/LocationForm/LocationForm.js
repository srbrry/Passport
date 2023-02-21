import { useState } from "react"
import * as locationsAPI from "../../utilities/location-api"
import './LocationForm.css'

export default function LocationForm() {


    const [location, setLocation] = useState({
        location: "",
        dateFrom: "",
        dateTo: ""
    })

    function handleChange(event) {
        setLocation({...location, [event.target.name]: event.target.value})
        // console.log(location)
    }

    function handleSubmit(event) {
        event.preventDefault()
        // console.log(`location is: ${location}`)
        locationsAPI.addLocation(location)
        
    }

    return(
        <>
        <div className="location-form-container">
            <form onSubmit={handleSubmit} id="add-location-form">
                <label>Location</label>
                <input 
                    name = "location"
                    type = "text" 
                    className = "location-form-input"
                    onChange = {handleChange} />
                <label>From:</label>
                <input 
                    name = "dateFrom"
                    type = "date"  
                    className = "location-form-input"
                    onChange = {handleChange} />
                <label>To:</label>
                <input 
                    name = "dateTo"
                    type = "date"  
                    className = "location-form-input"
                    onChange = {handleChange} />     
                <button type="submit" id="add-location-button">Add Past Trip</button>
            </form>
        </div>
        </>
    )
}