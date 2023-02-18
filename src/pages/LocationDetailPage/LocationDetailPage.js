import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import UpdateLocationForm from "../../components/UpdateLocationForm/UpdateLocationForm"
import * as locationsAPI from "../../utilities/location-api"

export default function LocationDetailPage() {

    const location = useLocation()
    const { data } = location.state

    const [showForm, setShowForm] = useState(false)



    const [locationData, setLocationData] = useState({})


    useEffect(function() {
        async function show() {
             const locationApiData = await locationsAPI.showLocation(data.location._id)
             console.log(locationApiData)
             setLocationData(locationApiData)
        }
       show()
    }, [setLocationData, data.location._id])
    





    console.log(" coming from detail page" + data.location.location)

    return (
        <>

        <button onClick={() => setShowForm(!showForm)}>Update Location</button> 

        {showForm ? (<UpdateLocationForm data={data}/>) : " "}

        <p>{data.location.location}</p>
        <p>{data.location.dateFrom}</p>
        <p>{data.location.dateTo}</p>
        <p>{data.location.user}</p>
        </>
    )
}