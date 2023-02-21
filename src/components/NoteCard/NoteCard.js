import { useState } from "react"
import UpdateNoteForm from "../updateNotesForm/updateNotesForm";

export default function NoteCard({ notes, data }){

    const [formToggle, setFormToggle] = useState(false)

    return(
        <> 
            <h2><span onClick={() => setFormToggle(!formToggle)}>{notes.title}</span></h2>

            {formToggle ? (<UpdateNoteForm notes={notes} data={data} />) : ""}
            
        </>
    )
}