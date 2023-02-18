import { useLocation } from "react-router-dom"
import { useState } from "react"
import UpdateLocationForm from "../../components/UpdateLocationForm/UpdateLocationForm"

export default function LocationDetailPage() {

    const location = useLocation()
    const { data } = location.state

    const [showForm, setShowForm] = useState(false)

    

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