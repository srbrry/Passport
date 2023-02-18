const Location = require("../../models/locations")

async function index(req, res) {
    const locations = await Location.find({})
    res.json(locations)
}

async function create(req, res) {
    try{
        console.log(req.user)
        req.body.user = req.user._id
        const location = await Location.create(req.body)
        res.json(location)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

async function updateLocation(req, res) {
    try{
            //find by Id 
        const location = await Location.findById(req.params.id)
        location.set(req.body)
        await location.save()
        res.json(location)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

async function deleteLocation(req, res) {
    try{
        console.log(req.params.id)
        const location = await Location.findById(req.params.id)
        location.deleteOne()

    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}



module.exports = {
    index,
    create,
    updateLocation,
    deleteLocation
}