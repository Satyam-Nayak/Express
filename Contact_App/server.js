// package.json
//server.js
// .env

const express = require('express')
const app = express()
const mongoose= require('mongoose')


let connectDb = async()=>{
    await mongoose.connect('mongodb://localhost:27017')
    console.log("mongodb connected")
}
connectDb()

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.listen(5000,err=>{
    if(err) throw err;
    console.log('server is running on port 5000')
})