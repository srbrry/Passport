import { useState } from "react"
import LocationForm from "../../components/LocationForm/LocationForm";
import LocationList from "../../components/LocationList/LocationList";

export default function LocationPage() {

    const [showForm, setShowForm] = useState(false)

    return(
        <>
         <h2>My Destinations</h2>
       
         <button onClick={() => setShowForm(!showForm)}>Add Location</button> 
        
        {showForm ? (<LocationForm/>) : " "}

        <LocationList />
        </>
       
    )
}


