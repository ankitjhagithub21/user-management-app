const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minLength:[3,"User name must be 3 character long."],
    },
    phone:{
        type:String,
        required:true,
        minLength:[10,"Phone number must be 10 digit long."],
        maxLength:[10,"Phone number is greater than 10 digit."]
    }
},{versionKey:false,timestamps:true})

const User = mongoose.model('User',userSchema)
module.exports = User