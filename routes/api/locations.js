const express = require("express")
const router = express.Router()
const locationsCTRL = require("../../controllers/api/locations")


//GET /api/locations
router.get("/", locationsCTRL.index)

//POST /api/locations
router.post("/", locationsCTRL.create)


module.exports = router