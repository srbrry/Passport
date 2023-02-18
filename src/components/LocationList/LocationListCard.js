import { Link } from "react-router-dom"

export default function LocationListCard({ location }){
    
    return(
        <Link to={`/${location.location}`} state={{ data: {location}}}>
            <h2>{location.location}</h2> 
            <p>From: {location.dateFrom}</p>
            <p>To: {location.dateTo}</p>
            <p>Notes: {location.note}</p>
        </Link> 
    )
}