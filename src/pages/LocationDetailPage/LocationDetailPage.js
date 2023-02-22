import React from "react"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import UpdateLocationForm from "../../components/UpdateLocationForm/UpdateLocationForm"
import * as locationsAPI from "../../utilities/location-api"
import NoteForm from "../../components/NoteForm/NoteForm"
import NoteCard from "../../components/NoteCard/NoteCard"
import './LocationDetailPage.css'

export default function LocationDetailPage() {
        //react component that allows a prop to be based via Link
    const location = useLocation()
    const { data } = location.state

    const [showForm, setShowForm] = useState(false)
    const [locationData, setLocationData] = useState({ note: [] })

        //fetch the specified location via location Id
        //render the information when page loads
    useEffect(function() {
        async function show() {
             const locationApiData = await locationsAPI.showLocation(data.location._id)
             setLocationData(locationApiData)
        }
       show()
    }, [])

        //add the new note to and set it causing a render
    function onAddNote(newNote) {
        let notes = [...locationData.note, newNote];
        setLocationData({ ...locationData, note: notes });
    }

    //implement in version 2
    //function onUpdateNote(note) {}
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