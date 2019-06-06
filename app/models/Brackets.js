const mongoose = require('mongoose')
const Schema = mongoose.Schema

let bracesSchema = new Schema(
    {
        userName: {type: String, unique: true},
        message: {type: String, default: ''},
        attempts: {type: Number, default: 0},
    }
)

module.exports = mongoose.model('Brackets', bracesSchema)