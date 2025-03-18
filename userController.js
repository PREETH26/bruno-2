const User = require('./schema')
const bcrypt = require('bcryptjs')

const logIn = async(req, res) => {
    try{
       const {email,password} = req.body;

       if(!email || !password){
        return res.status(400).json({message : "All fields are required"})
       }

       const check =await User.findOne({email});

       if(!check){
        return res.status(400).json({message : "User does not exist signUp to continue"});
       }

       const checkPass =await bcrypt.compare(password,check.password);
       if(!checkPass){
        return res.status(400).json({message : "Wrong password"})
       }

       res.status(200).json({message : "Logged In successfully"});
    }catch(err){
        res.status(500).json({message : `Internal Server Error : ${err}`})
    }
}

module.exports = logIn;