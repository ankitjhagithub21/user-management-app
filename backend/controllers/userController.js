const User = require("../model/user")
const createUser = async(req,res) =>{
    try{
        
        const {name,phone} = req.body;
        
        const newUser = new User({
            name,
            phone
        })

        await newUser.save()

        res.status(201).json({
            success:true,
            message:"User created successfully.",
            user:newUser
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const deleteUser = async(req,res) =>{
    try{

        const {userId} = req.params;

        const user = await User.findByIdAndDelete(userId)

        if(!user){
           return res.status(404).json({
                success:false,
                message:"User not found."
            })
        }

        res.status(200).json({
            success:true,
            message:"User deleted successfully."
        })

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const updateUser = async(req,res) =>{
    try{
        const {userId} = req.params;

        const {name,phone} = req.body;

        const user = await User.findByIdAndUpdate(userId,{
            name,
            phone
        },{new:true})
        
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found."
            })     
        }

        res.status(200).json({
            success:true,
            message:"User updated successfully.",
            user
        })


    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const getUsers = async(req,res) =>{
    try{

        const users = await User.find()

        res.status(200).json({users})

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {
    createUser,
    deleteUser,
    updateUser,
    getUsers
}