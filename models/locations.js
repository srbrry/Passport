const mongoose = require('mongoose')
const noteSchema = require('./notes')
const Schema = mongoose.Schema

const locationSchema = new Schema({
    location: {
     type: String,
     required: true
    },
    dateFrom: {
        type: String
    },
    dateTo: {
        type: String
    },
    note: {
        type: [noteSchema],
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
})

const Location = mongoose.model('Location', locationSchema)

module.exports = Location