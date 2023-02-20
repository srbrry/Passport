import { useState } from "react"
import * as notesAPI from "../../utilities/note-api"


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
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input  
                    name = "title"
                    type = "text"
                    value = {note.title}
                    onChange = {handleChange}
                />
                <label>Content</label>
                <textarea 
                    rows="5"
                    cols="30"
                    name = "content"
                    type = "text"
                    value = {note.content}
                    onChange={handleChange} 
                />
                <button type="submit">Update Note</button>
            </form>
            <button onClick={handleDelete} >Delete</button>
        </div>
    )
}