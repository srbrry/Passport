import sendRequest from "./send-request"

const NOTE_URL = "/api/notes"

//POST Note
export function createNote(note) {
    return sendRequest(NOTE_URL, "POST", note)
}

//PATCH Note
export function updateNote(note, noteId){
    return sendRequest(`${NOTE_URL}/${noteId}`, "PATCH", note)
}

// DELETE Note
export function deleteNote(note, noteId){
    return sendRequest(`${NOTE_URL}/${noteId}`, "DELETE", note)
}