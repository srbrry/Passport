export default function LocationListCard({ location }){
    return(
        <>
            <h2>{location.location}</h2>
            <p>From: {location.dateFrom}</p>
            <p>To: {location.dateTo}</p>
            <p>Notes: {location.note}</p>
        </>
    )
}