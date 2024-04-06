const User = require("../MODEL/Usermodel");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const createuser = async(req,res)=>
{
    const {name,email,password}=req.body;
    const userfind=await User.findOne({email})

    if(userfind)
    {
        res.json("already exist")
    }
    else{
        const salt = await bcrypt.genSalt(10);
        const hashedpswd = await bcrypt.hash(password,salt);

        const userdata=await User.create({
            name,email,password:hashedpswd
        })
        res.json({
            Id:userdata._id,
            name:userdata.name,
            email:userdata.email,
            password:userdata.password,
            Token:tokengenerate(userdata._id)
        })
    }
}


const getuser = async(req,res)=>
{
    const userget = await User.find();
    res.json(userget);
}


const getsingleusr = async(req,res)=>
{
    id=req.params.id;
    const usersingle = await User.findById(id);
    res.json(usersingle);
}

const updateuser = async(req,res)=>
{
    const _id=req.params.id;
    const {name,email,password} = req.body;
    const userupdate = await User.findByIdAndUpdate(_id,{name,email,password});
    res.json(userupdate)
}

const deleteuser = async(req,res)=>
{
    const _id=req.params.id;
    const userdelete = await User.findByIdAndDelete(_id);
    res.json("User deleted successfully")
}




const tokengenerate=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'100d'
    })
}


module.exports={createuser,getuser,getsingleusr,updateuser,deleteuser}