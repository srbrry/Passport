import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import UpdateLocationForm from "../../components/UpdateLocationForm/UpdateLocationForm"
import * as locationsAPI from "../../utilities/location-api"
import NoteForm from "../../components/NoteForm/NoteForm"
import NoteCard from "../../components/NoteCard/NoteCard"
import UpdateNoteForm from "../../components/updateNotesForm/updateNotesForm"
import './LocationDetailPage.css'

export default function LocationDetailPage() {

    const location = useLocation()
    const { data } = location.state

    const [showForm, setShowForm] = useState(false)
    const [showNotes, setShowNotes] = useState(false)

    const [locationData, setLocationData] = useState({ note: [] })


    useEffect(function() {
        async function show() {
             const locationApiData = await locationsAPI.showLocation(data.location._id)
            //  console.log(locationApiData)
             setLocationData(locationApiData)
        }
       show()
    }, [])

    function onAddNote(newNote) {
        let notes = [...locationData.note, newNote];
        setLocationData({ ...locationData, note: notes });
    }

    function onUpdateNote(note) {}
    function onDeleteNote(note) {}

    console.log(locationData)
    return (
        <>
    
    <div className="main-page-passport-container">
        <div className="passport-left passport-page">
            
        <h2>{locationData.location}</h2>
        <p>Start Date: {locationData.dateFrom}</p>
        <p>End Date: {locationData.dateTo}</p>

        <button id="update-location-button-2" onClick={() => setShowForm(!showForm)}>Update Location</button> 
         

         {showForm ? (<UpdateLocationForm data={data}/>) : " "}
        </div>

        <div className="passport-right passport-page">
        {
            locationData.note.map((note, index) => {
                return(
                    <> 
                        <NoteCard notes={note} data={data} key={index} />
                        {/* <UpdateNoteForm notes={note} data={data}/> */}
                        {/* <button onClick={() => setShowNotes(!showNotes)}>Update this note</button> */}
                    </>
                )
            })
        }
        <NoteForm handleAddNote={onAddNote} />
        </div>
    </div>
        </>
    )
}