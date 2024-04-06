const User = require("../MODEL/Usermodel");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const Loginuser = async(req,res)=>
{
    const {email,password} = req.body;
    const userdetails = await User.findOne({email})

    if(userdetails && (await bcrypt.compare(password,userdetails.password)))
    {
        res.json({messege:"Login successfully",token:userdetails._id})
    }
    else{
        res.json({
            Id:userdetails._id,
            email:userdetails.email,
            password:userdetails.password,
            Token:tokengenerate(userdetails._id)
        })
    }
}

const tokengenerate=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'100d',
    })
}

module.exports=Loginuser