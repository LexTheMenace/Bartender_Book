const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
    name: String,
    thumbnail: String,
    dateAdded: {
        type: Date,
        default: Date.now
    },
    org_id: Number,
    ingredients: [
        {item: String, amount: String}
    ]
})

module.exports = Drink = mongoose.model('drink', DrinkSchema)