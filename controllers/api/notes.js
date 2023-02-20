const Note = require("../../models/notes")
const Location = require("../../models/locations")

async function showNote(req, res) {
    const notes = await Note.findById(req.params.locationId)
    res.json(notes)
}

async function createNote(req, res) {
    try {
        const location = await Location.findById(req.body.locationId)
        const note = await location.note.push(req.body)
        await location.save()
        res.json(note)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

async function indexNote(req, res) {
    const notes = await Location.findById(req.body.user)

}

async function updateNote(req, res) {
    try{
        const noteId = req.params.noteId
        const locationId = req.body.locationId
        const noteInput = req.body
        const location = await Location.findById(locationId)
        const note = await location.note.id(noteId)
        note.set(noteInput)
        await location.save()
        res.json(note)
    } catch(error) {
        console.log(error)
        res.status(400).json(error)
    }
}

async function deleteNote(req, res) {
    try{
        const noteId = req.params.noteId
        const locationId = req.body.locationId
        const location = await Location.findById(locationId)
        location.note.id(noteId).remove()
        await location.save()
    }
    catch(error){
        console.log(error)
        res.status(400).json(error)
    }
    
}


module.exports = {
    showNote,
    createNote,
    indexNote,
    updateNote,
    deleteNote
}