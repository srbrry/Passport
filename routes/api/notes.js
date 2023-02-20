const express = require("express")
const router = express.Router()
const notesCTRL = require("../../controllers/api/notes")


//GET /api/notes
router.get("/:noteId", notesCTRL.showNote)

//POST /api/notes
router.post("/", notesCTRL.createNote)

// INDEX /api/notes
router.get("/", notesCTRL.indexNote)

// UPDATE /api/notes
router.patch("/:noteId", notesCTRL.updateNote)

// DELETE /api/notes
router.delete("/:noteId", notesCTRL.deleteNote)

module.exports = router