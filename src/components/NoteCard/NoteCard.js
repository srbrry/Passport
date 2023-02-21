import { useState } from "react"
import UpdateNoteForm from "../updateNotesForm/updateNotesForm";
import './NoteCard.css'

export default function NoteCard({ notes, data }){

    const [formToggle, setFormToggle] = useState(false)

    return(
        <> 
        
            <h2 className="note-title-link">
                <span onClick={() => setFormToggle(!formToggle)}>{notes.title}</span>
            </h2>
            <p>{notes.content}</p>
            <hr></hr>

            {formToggle ? (<UpdateNoteForm notes={notes} data={data} />) : ""}
            
        </>
    )
}