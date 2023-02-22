import { Link } from "react-router-dom"
import "./LocationListCard.css"

export default function LocationListCard({ location }){
    
    return(
        <>
        <Link to={`/${location.location}`} state={{ data: {location}}}>
            <h2>{location.location}</h2> 
        </Link> 
            <span id="start-date-location-list-card"><p>Start Date: {location.dateFrom}</p></span>
            {/* <p>To: {location.dateTo}</p> */}
            {/* <p>Notes: {location.note} </p> */}
        </>
    )
}