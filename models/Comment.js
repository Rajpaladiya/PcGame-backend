const mongoose = require('mongoose')
const {Schema} = mongoose;

const  CommentSchema = new Schema({


    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }

})

module.exports =  mongoose.model('Comments',CommentSchema)
