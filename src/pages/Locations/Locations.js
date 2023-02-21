import { useState } from "react"
import LocationForm from "../../components/LocationForm/LocationForm";
import LocationList from "../../components/LocationList/LocationList";
import './Locations.css'

export default function LocationPage() {

    const [showForm, setShowForm] = useState(false)
    const [showPastTripsForm, setShowPastTripsForm] = useState(false)

    return(
        <>
        <div className="main-page-passport-container">
            <div className="passport-left passport-page">
            <h2>My Destinations</h2>
        
            <button onClick={() => setShowForm(!showForm)}>Add Location</button> 
            
            {showForm ? (<LocationForm/>) : " "}
            </div>

            <div className="passport-right passport-page">
            <button onClick={() => setShowPastTripsForm(!showPastTripsForm)}>Show Past Trips</button>

            {showPastTripsForm ? (<LocationList/>) : " "}
            </div>
        </div>
        </>
    )
}


