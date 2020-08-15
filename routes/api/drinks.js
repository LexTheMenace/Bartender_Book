const express = require('express');
const router = express.Router();

// MODEL
const Drink = require('../../models/Drink');

// @route  GET /api/drinks
// @desc   Get All Drinks

router.get('/', (req, res) => {
   
    Drink.find()
        .sort({ date: -1 })
        .then(drinks => res.json(drinks))
});

// @route  POST /api/drinks
// @desc   Add New Drink

router.post('/', (req, res) => {
    const { name, thumbnail, ingredients, drink_id, glass, instructions } = req.body
    
   const newDrink = new Drink({
    name,
    thumbnail,
    drink_id,
    ingredients,
    instructions
   });
   
  newDrink.save().then(drink => res.json(drink))
});

// @route  DELETE /api/drinks/:id
// @desc   Delete A Drink

router.delete('/:id', (req, res) => {
    
   Drink.findById(req.params.id)
    .then(drink => drink.remove().then(() => res.json({success: true, data: drink})))
    .catch(err => res.status(404).json({ success: false, error: "log not found" }))
 });

module.exports = router;