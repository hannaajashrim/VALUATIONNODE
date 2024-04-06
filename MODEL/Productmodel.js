const mongoose = require('mongoose')

const ProductSchema = mongoose.Schema({
    name:{type:String},
    description:{type:String},
    price:{type:Number},
    quantity:{type:String}
})

const Products = mongoose.model("products",ProductSchema);

module.exports=Products;