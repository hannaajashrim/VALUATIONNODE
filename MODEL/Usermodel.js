const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String},
    password:{type:String}
})

const User = mongoose.model("user",UserSchema);
module.exports=User;