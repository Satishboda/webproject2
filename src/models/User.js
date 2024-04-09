const mongoose=require('mongoose')
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        unique:true,
        lowercase:true,
        trim:true,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
        minlength:8,

    },
    
},{timestamps:true})
module.exports=mongoose.model("User",userSchema)