const express = require("express")
const router = express.Router()
const notesCTRL = require("../../controllers/api/notes")


//GET /api/notes
router.get("/notes/:noteId", notesCTRL.showNote)

//POST /api/notes
router.post("/", notesCTRL.createNote)

// INDEX /api/notes
router.get("/notes", notesCTRL.indexNote)

// UPDATE /api/notes
router.patch("/notes/:noteId", notesCTRL.updateNote)

// DELETE /api/notes
router.delete("/notes/:noteId", notesCTRL.deleteNote)

module.exports = router