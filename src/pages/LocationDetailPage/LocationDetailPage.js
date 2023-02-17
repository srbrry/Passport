import { useLocation } from "react-router-dom"

export default function LocationDetailPage() {

    const location = useLocation()
    const { data } = location.state

    console.log(data.location.location)
    return (
        <>
        <p>{data.location.location}</p>
        <p>{data.location.dateFrom}</p>
        <p>{data.location.dateTo}</p>
        <p>{data.location.user}</p>

        </>
    )
}