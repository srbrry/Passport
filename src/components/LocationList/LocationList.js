import { useState, useEffect } from "react"
import LocationListCard from "./LocationListCard"
import * as locationsAPI from "../../utilities/location-api"
  
export default function LocationList(){
    const [locations, setLocations] = useState([])

    useEffect(function() {
        async function getLocations() {
            const locations = await locationsAPI.getLocation()
            setLocations(locations)
        }
        getLocations()
    }, [])


    return(
        <>
           <h3>Hello this is the list</h3>
            {
                locations.map((location, index) => {
                    return(
                        <>
                            <LocationListCard location={location} index={index} />
                        </>
                    )
                   
                })
            }
        </>
     
    )
}