import { useState } from "react"
import * as notesAPI from "../../utilities/note-api"
import './updateNotesForm.css'

export default function UpdateNoteForm({ notes, data }) {
        //assign value of note _id
    let noteId = notes._id
    
    const [note, setNote] = useState({
        title: notes.title,
        content: notes.content,
        noteId: noteId,
        locationId: data.location._id
    })
    

    function handleChange(event) {
        setNote({...note, [event.target.name]: event.target.value})
    }


    function handleSubmit(event) {
        event.preventDefault()
 
        notesAPI.updateNote(note, noteId)   
    }

    function handleDelete() {
        notesAPI.deleteNote(note, noteId)
        alert('deleted note')
    }


    return (
        <div className="update-note-form-container">
            <form onSubmit={handleSubmit} id="update-note-form">
                <label>Title</label>
                <input  
                    name = "title"
                    type = "text"
                    id = "note-title"
                    value = {note.title}
                    onChange = {handleChange}
                />
                <label>Content</label>
                <textarea 
                    rows="5"
                    cols="30"
                    name = "content"
                    id = "note-content"
                    type = "text"
                    value = {note.content}
                    onChange={handleChange} 
                />
                <button type="submit" id="update-note-button">Update Note</button>
            </form>
            <button id="delete-note-button" onClick={handleDelete} >Delete Note</button>
        </div>
    )
}