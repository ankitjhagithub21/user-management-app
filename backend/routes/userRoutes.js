const express = require('express')
const { createUser, deleteUser, updateUser, getUsers, getUserById } = require('../controllers/userController')
const router = express.Router()

router.post("/create",createUser)
router.delete("/delete/:userId",deleteUser)
router.put("/update/:userId",updateUser)
router.get("/",getUsers)
router.get("/:userId",getUserById)


module.exports = router