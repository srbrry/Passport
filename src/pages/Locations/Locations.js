import { useState } from "react"
import LocationList from "../../components/LocationList/LocationList";

export default function LocationPage() {

    const [showForm, setShowForm] = useState(false)

    return(
        <>
         <h2>My Destinations</h2>
              <LocationList />
        </>
       
    )
}


