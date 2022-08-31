const {Schema,model} = require('mongoose')

const Note = new Schema({
 message: {type: String},
 location: {
    longitude: {
        type: Number
    },
    lattitude: {
        type: Number
    }
 }
})

module.exports = model('Note', Note)
