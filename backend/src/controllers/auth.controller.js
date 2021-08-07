const jwt = require('jsonwebtoken')
require('dotenv').config()

const User = require('../models/user.model')

const newToken = (user) => {
    return jwt.sign({id: user.id}, process.env.JWT_SECRET_KEY);
}

const signup = async (req, res) => {
    
    try {
        const user = await User.create(req.body)
        let token = newToken(user)
        return res.status(201).json({data: {user,token}})
    }
    catch (err) {
        return res 
            .status(500)
            .json({status: "failed", meaasage: err.message})
    }
}

const signin = async (req, res) => {
    console.log(req.body)
    let user;
    try{
        user = await User.findOne({email: req.body.email}).exec()
        if(!user) 
            return res
                .status(401)
                .json({
                    status: "failed",
                    message: "Your email is not correct",
                })
    } catch (e) {
        return res
            .status(500)
            .json({
                status: "failed",
                message: "Something went wrong here in email"
            })
    }

    try {
        const match = await user.checkPassword(req.body.password)
        if(!match) return res
            .status(401)
            .json({
                status: "failed",
                message: "Your password is not correct",
            })
    } catch (e) {
        return res
            .status(500)
            .json({
                status: "failed",
                message: "Something went wrong in password"
            })
    }

    const token  = newToken(user);

    return res.status(201).json({data: {user,token}});
}


// get users
//.select("-password")
const user = async (req, res) => {
    const users = await User.find().lean().exec();
  
    return res.status(200).json({data: users})
}

const userbyId = async (req, res) => {
    console.log(req.params.id)
    try{
        const post = await User.findById(req.params.id).lean().exec();
        res.status(200).json({post})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
}

const deleteUser = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)
        res.status(204).json({post})
    } catch (err) {
        res.status(400).json({message: err.message})

    }
}

const rating= async (req,res)=>{
    const user =await User.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()

    return res.status(200).json({data:{user}})
}

module.exports = {
    signup,
    signin,
    user,
    newToken,
    rating,
    userbyId, 
    deleteUser
}