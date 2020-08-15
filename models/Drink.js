const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
    name: String,
    thumbnail: String,
    dateAdded: {
        type: Date,
        default: Date.now
    },
    drink_id: Number,
    ingredients: [
        {item: String, amt: String}
    ],
    instructions: String,
    glass: String
})

module.exports = Drink = mongoose.model('drink', DrinkSchema)