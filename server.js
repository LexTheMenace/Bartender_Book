const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const drinks = require('./routes/api/drinks')

const app = express();

// Bodyparser Middleware: Allows app to read JSON
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  console.log("hit");
    //app.use(express.static("client/build/"));
    app.use("/", express.static(path.join(__dirname, "./client/build/")));
  }

//Create Mongo Database then Config
const db = process.env.MONGODB_URI || require('./config/keys').mongoURI; 

//Connect to Mongo
mongoose.connect(db)
 .then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err))

// Use Routes 
app.use('/api/drinks', drinks);


 const PORT = process.env.PORT || 5000;

 app.listen(PORT, () => console.log(`Server Running at http://localhost:${PORT}`))
