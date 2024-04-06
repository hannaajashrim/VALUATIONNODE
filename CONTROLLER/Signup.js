const User = require("../MODEL/Usermodel");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const Signupuser = async(req,res)=>
{
    const {name,email,password} = req.body;
    const userdata = await User.findOne({email})

    if(userdata)
    {
        res.json("User already exist");
    }
    else{
        const salt = await bcrypt.genSalt(10);
        const hashedpswrd = await bcrypt.hash(password,salt);
        const userregister = await User.create({
            name,email,password:hashedpswrd
        })
        res.json({
            Id:userregister._id,
            name:userregister.name,
            email:userregister.email,
            password:userregister.password,
            Token:tokengenerate(userregister._id)
        })
    }
}

const tokengenerate=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'100d'
    })
}

module.exports=Signupuser