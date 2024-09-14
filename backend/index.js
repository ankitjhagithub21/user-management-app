require('dotenv').config()
const express = require('express')
const connectDb = require('./conn')

const app = express()
const port = process.env.PORT || 3000

connectDb()

app.get("/",(req,res)=>{
    res.json({
        "message":"Api working."
    })
})



app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})