import { useState, useEffect } from "react"
import LocationListCard from "./LocationListCard"
import * as locationsAPI from "../../utilities/location-api"

  
export default function LocationList(){
    const [locations, setLocations] = useState([])

    useEffect(function() {
        async function getLocations() {
            const locations = await locationsAPI.getLocation()
            setLocations(locations)
            console.log(locations)
        }
        getLocations()
    }, [] )
    
    const locationItem = locations.map((location, index) => <LocationListCard location={location} index={index} key={index} />)

    return(
        <>
           <h3>Hello this is the list</h3>
           {locationItem}
        </>
     
    )
}


// {
//     locations.map((location, index) => {
//         return(
//             <>
//                 <LocationListCard location={location} index={index} />
//             </>
//         )
       
//     })
// }