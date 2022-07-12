const mongoose = require('mongoose');
const dbConnect=()=>{
 mongoose.connect('mongodb+srv://amina:amina@cluster0.rmo3z.mongodb.net/Book',
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