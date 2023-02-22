import { useState } from "react"
import * as locationsAPI from "../../utilities/location-api"
import './LocationForm.css'


export default function LocationForm({ onLocationAdded }) {
  const [location, setLocation] = useState({
    location: "",
    dateFrom: "",
    dateTo: "",
  });

  function handleChange(event) {
    setLocation({ ...location, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const addedLocation = await locationsAPI.addLocation(location);
    onLocationAdded(addedLocation);
    setLocation({ location: "", dateFrom: "", dateTo: "" });
  }


    return(
        <>
        <div className="location-form-container">
            <form onSubmit={handleSubmit} id="add-location-form">
                <label className="add-location-label">Location:</label>
                <input 
                    name = "location"
                    type = "text" 
                    className = "location-form-input"
                    value={location.location}
                    onChange = {handleChange} />
                <label className="add-location-label">From:</label>
                <input 
                    name = "dateFrom"
                    type = "date"  
                    className = "location-form-input"
                    value={location.dateFrom}
                    onChange = {handleChange} />
                <label className="add-location-label">To:</label>
                <input 
                    name = "dateTo"
                    type = "date"  
                    className = "location-form-input"
                    value={location.dateTo}
                    onChange = {handleChange} />     
                <button type="submit" id="add-location-button">Add Past Trip</button>
            </form>
        </div>
        </>
    )
}

