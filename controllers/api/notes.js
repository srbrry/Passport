const Note = require("../../models/notes")
const Location = require("../../models/locations")

async function showNote(req, res) {
    const notes = await Note.findById(req.params.locationId)
    res.json(notes)
}

async function createNote(req, res) {
    try {
        console.log(req.body)
        console.log(req.body.locationId)
        const location = await Location.findById(req.body.locationId)
        console.log(location)
        console.log(location.note)
        console.log("controllers blah blah")
        const note = await location.note.push(req.body)
        console.log(location.note)
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
        console.log(req.body)
        const note = await Note.findById(req.params.id)
        note.update(req.body)
        console.log(note)

        note.save()
        res.json(note)
    } catch(error) {
        console.log(error)
        res.status(400).json(error)
    }
}

async function deleteNote(req, res) {
}


module.exports = {
    showNote,
    createNote,
    indexNote,
    updateNote,
    deleteNote
}