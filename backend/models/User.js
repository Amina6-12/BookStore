const mongoose= require('mongoose');

//Schema
const Userschema= new mongoose.Schema({
    name: {
        type:String,
        required:true,
        unique:true,
    },
    email: {
        type:String,
        required:true,
    },
    password: {
        type:String,
        required:true,
    },

});

const User = mongoose.model('User', Userschema);

module.exports = User;