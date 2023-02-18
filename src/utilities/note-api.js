import sendRequest from "./send-request"

const NOTE_URL = "/api/notes"

//GET locations
export function getNote() {
    return sendRequest(NOTE_URL)
}

//POST location
export function createNote(note) {
    console.log(note)
    return sendRequest(NOTE_URL, "POST", note)
}
