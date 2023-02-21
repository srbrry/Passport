import { useState } from "react"
import LocationList from "../../components/LocationList/LocationList";
import './Locations.css'

export default function LocationPage() {

    const [showForm, setShowForm] = useState(false)
    const [showPastTripsForm, setShowPastTripsForm] = useState(false)

    return(
        <>
        <LocationList />
        </>
    )
}


