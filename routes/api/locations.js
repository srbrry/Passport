const express = require("express")
const router = express.Router()
const locationsCTRL = require("../../controllers/api/locations")


//GET /api/locations
router.get("/", locationsCTRL.index)

//POST /api/locations
router.post("/", locationsCTRL.create)

//PATCH /api/locations/:id
router.patch("/:id",locationsCTRL.updateLocation)

//DELETE /api/locations/:id
router.delete("/:id", locationsCTRL.deleteLocation)

module.exports = router