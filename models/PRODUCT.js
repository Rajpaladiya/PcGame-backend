const mongoose = require('mongoose')
const {Schema} = mongoose;

const  ProductSchma = new Schema({

   


    Type:{
        type:String,
        required:true
    },
    categories:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    tag:{
        type:String,
        required:true
    },
    comment:{
        type:Number,
        required:true,
        

    },
    download:{
        type:Number,
        required:true,
        

    },
    type_one:{
        type:String,
        required:true
    },
    type_two:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true

    },
    vote:{
        type:Number,
        required:true
    },
    size:{
        type:Number,
        required:true
    },
    publishDate:{
        type:String,
        required:true
    },
    genre_one:{
        type:String,
        required:true
    },
    genre_two:{
        type:String,
        required:true
    },
    score:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    quality:{
        type:String,
        required:true
    },
    views:{
        type:Number,
        required:true
    },
    video:{
        type:String,
        required:true
    },
    screenshot_one:{
        type:String,
        required:true
    },
    screenshot_two:{
        type:String,
        required:true
    },
    screenshot_three:{
        type:String,
        required:true
    },
    about_one:{
        type:String,
        required:true
    },
    about_two:{
        type:String,
        required:true
    },
    about_three:{
        type:String,
        required:true
    },
    url:{
        type:String
    },
    file_path:{
        type:String

    }


    


})

module.exports =  mongoose.model('products',ProductSchma)