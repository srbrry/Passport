import { useState } from "react"
import * as locationsAPI from "../../utilities/location-api"

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
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>Location</label>
                <input 
                    name = "location"
                    type = "text" 
                    onChange = {handleChange} />
                <label>From:</label>
                <input 
                    name = "dateFrom"
                    type = "date"  
                    onChange = {handleChange} />
                <label>To:</label>
                <input 
                    name = "dateTo"
                    type = "date"  
                    onChange = {handleChange} />     
                <button type="submit">Add My Destination</button>
            </form>
        </div>
        </>
    )
}