const express = require('express');
const router = express.Router();

// MODEL
const Drink = require('../../models/Drink');

// @route  GET /api/drinks
// @desc   Get All Drinks
// @access Users
router.get('/', (req, res) => {
    Drink.find()
    .sort({ date: -1 })
        .then(drinks => res.json(drinks))
});

// @route  POST /api/drinks
// @desc   Add New Drink
// @access Users
router.post('/', (req, res) => {
   const newDrink = new Drink({
       restaurant: req.body.restaurant,
       items: req.body.items
   });
   
  newDrink.save().then(drink => res.json(drink))
});

// @route  DELETE /api/drinks/:id
// @desc   Delete A Drink
// @access Users
router.delete('/:id', (req, res) => {
    console.log(req.params.id);
   Drink.findById(req.params.id)
    .then(drink => drink.remove().then(() => res.json({success: true, data: drink})))
    .catch(err => res.status(404).json({ success: false, error: "log not found" }))
 });

module.exports = router;