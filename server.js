const express = require('express');
const mongoose = require('mongoose');
const drinks = require('./routes/api/drinks')

require('dotenv').config();

const app = express();

// Bodyparser Middleware: Allows app to read JSON
app.use(express.json());

app.use('/', express.static("client/build/"));

//Create Mongo Database then Config
const db = process.env.MONGODB_URI 

//Connect to Mongo
mongoose.connect(db)
 .then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err))

// Use Routes 
app.use('/api/drinks', drinks);


 const PORT = process.env.PORT || 5000;

 app.listen(PORT, () => console.log(`Server Running at http://localhost:${PORT}`))
