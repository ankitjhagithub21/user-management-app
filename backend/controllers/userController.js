const createUser = async(req,res) =>{
    try{

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const deleteUser = async(req,res) =>{
    try{

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const updateUser = async(req,res) =>{
    try{

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
}

const getUsers = async(req,res) =>{
    try{

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