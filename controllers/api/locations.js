const Location = require("../../models/locations")

async function index(req, res) {
    const locations = await Location.find({user: req.user._id})
    res.json(locations)
}

async function create(req, res) {
    try{
        const userId = req.user._id
        console.log(req.body.user)
        const location = await Location.create(req.body)
        res.json(location)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}




module.exports = {
    index,
    create,
}