import { useState } from "react"
import { useLocation } from "react-router-dom"
import * as noteAPI from "../../utilities/note-api"


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
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <label>Note Title:</label>
                <input 
                    name = "title"
                    type = "text"  
                    onChange = {handleChange} />
                <label>Note Content:</label>
                <input 
                    name = "content"
                    type = "text"
                    onChange = {handleChange} />     
                <button type="submit">Add Note</button>
            </form>
        </div>
        </>
    )
}