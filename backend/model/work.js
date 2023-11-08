const mongoose = require('mongoose');
const schema = mongoose.Schema
const userDATA = new schema ({

    title:{
        type:String,
        required:true
    },
    reps:{
        type:Number,
        required:true,
    },
    load:{
        type:Number,
        required:true
    },
    
        
},{timestamps : true})
module.exports = mongoose.model('worksout_data',userDATA)