// package.json
//server.js
// .env

const express = require('express')
const app = express()
// const mongoose= require('mongoose')
const {connect}= require('mongoose')
let {PORT,MONGODB_URI} = require('./config/index')

let connectDb = async()=>{
    // await mongoose.connect(MONGODB_URI)
    await connect(MONGODB_URI)
    console.log("mongodb connected")
}
connectDb()

app.get('/',(req,res)=>{
    res.send('Hello')
})


app.listen(PORT || 5000,err=>{
    if(err) throw err;
    console.log('server is running on port 5000')
})