const express = require('express')
const { createUser, deleteUser, updateUser, getUsers } = require('../controllers/userController')
const router = express.Router()

router.post("/create",createUser)
router.delete("/delete/:userId",deleteUser)
router.put("/update/:userId",updateUser)
router.get("/",getUsers)


module.exports = router