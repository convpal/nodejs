//app.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes/apiRoutes.js');
 
require("dotenv").config({
 path: path.join(__dirname, ".env")
});
 
const app = express();
 
const PORT = process.env.PORT || 8000;
 
mongoose
 .connect(process.env.LOCALHOST_MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
 .then(() => {
  console.log('Connected to the Database successfully');
 });
 
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes); 
app.listen(PORT, () => {
  console.log('Server is listening on Port:', PORT)
})

