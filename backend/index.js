require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDb = require('./conn')
const router = require('./routes/userRoutes')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

connectDb()

app.get("/",(req,res)=>{
    res.json({
        "message":"Api working."
    })
})


app.use("/api/users",router)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})