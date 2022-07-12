const mongoose = require('mongoose');
const dbConnect=()=>{
 mongoose.connect('mongodb+srv://amina:amina@cluster0.a5ows.mongodb.net/test',
 (err,done)=> {
    if(err){
    console.log(err)
    }
    if(done)
    {
    console.log('Db connected!');
    }
 }
);

module.exports = dbConnect;
}


//5UijFoqTYybgSxR2