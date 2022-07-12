
const mongoose = require('mongoose');
const express = require('express');
const User= require('./models/User');
const usersRoute=require('./routes/usersRoute');
require('./config/dbConnect');
const app = express();

//passing body data
app.use(express.json());

//Routes
app.use('/api/users', usersRoute);




//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
