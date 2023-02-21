import { useState } from "react"
import { useLocation } from "react-router-dom"
import * as noteAPI from "../../utilities/note-api"
import './NoteForm.css'

export default function NoteForm() {

    const location = useLocation()
    const { data } = location.state

    const [note, setNote] = useState({
        title: "",
        content: "",
        locationId: `${data.location._id}`
    })

    function handleChange(event) {
        setNote({...note, [event.target.name]: event.target.value})
        // console.log(note)
    }

    function handleSubmit(event) {
        event.preventDefault()
        // console.log(`location is: ${location}`)
        noteAPI.createNote(note)
        // console.log(note)
    }

    return(
        <>
        <div className="add-note-form-container">
            <form onSubmit={handleSubmit} id="add-note-form">
                <label>Note Title:</label>
                <input 
                    name = "title"
                    type = "text"  
                    input = "add-note-input"
                    onChange = {handleChange} />
                <label>Note Content:</label>
                <input 
                    name = "content"
                    type = "text"
                    input = "add-note-input"
                    onChange = {handleChange} />     
                <button type="submit" id="add-note-button">Add Note</button>
            </form>
        </div>
        </>
    )
}