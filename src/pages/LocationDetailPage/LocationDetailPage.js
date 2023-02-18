import { useLocation } from "react-router-dom"
import NoteForm from "../../components/NoteForm/NoteForm"

export default function LocationDetailPage() {

    const location = useLocation()
    const { data } = location.state

    console.log(data.location.note)
    return (
        <>
        <p>{data.location.location}</p>
        <p>{data.location.dateFrom}</p>
        <p>{data.location.dateTo}</p>
        <p>User Id: {data.location.user}</p>
        <p>Location Id: {data.location._id}</p>
        <p>Notes: {data.location.note}</p>
        <NoteForm />
        </>
    )
}