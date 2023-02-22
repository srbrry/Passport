import React from "react"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import * as noteAPI from "../../utilities/note-api"
import './NoteForm.css'

export default function NoteForm({ handleAddNote }) {

    const location = useLocation()
    const { data } = location.state

    const [note, setNote] = useState({
        title: "",
        content: "",
        locationId: `${data.location._id}`
    })

    function handleChange(event) {
        setNote({...note, [event.target.name]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
            //fetch call to POST new note
        noteAPI.createNote(note)
            //function passed down from LocationDetailPage that causes a render
        handleAddNote(note)
    }

    return(
        <>
        <div className="add-note-form-container">
            <form onSubmit={handleSubmit} id="add-note-form">
                <label>Note Title:</label>
                <input 
                    name = "title"
                    type = "text"  
                    id = "note-title-input"
                    onChange = {handleChange} />
                <label>Note Content:</label>
                <textarea
                    name = "content"
                    type = "text"
                    id = "note-content-input"
                    onChange = {handleChange}
                />    
                <button type="submit" id="add-note-button">Add Note</button>
            </form>
        </div>
        </>
    )
}