const Products = require("../MODEL/Productmodel");

const createproduct = async(req,res)=>
{
    const {name,description,price,quantity}=req.body;
    const productdata = await Products.create({
        name,description,price,quantity
    })
    res.json(productdata)
}


const getproduct = async(req,res)=>
{
    const productget = await Products.find();
    res.json(productget);
}

const getsinglepro = async(req,res)=>
{
    id=req.params.id;
    const getsingle = await Products.findById(id);
    res.json(getsingle);
}



const productdelete = async(req,res)=>
{
    _id=req.params.id;
    const deletepro = await Products.findByIdAndDelete(_id);
    res.json("product deleted");
}

const productupdate = async(req,res)=>
{
    _id=req.params.id;
    const {name,description,price,quantity}=req.body;
    const updatepro = await Products.findByIdAndUpdate(_id,{name,description,price,quantity});
    res.json(updatepro)
}

module.exports={createproduct,getproduct,getsinglepro,productdelete,productupdate}