const mongoose = require('mongoose')
require('dotenv').config()
let MONGODB_URI = process.env.MONGODB_URI

exports.connectDb = async()=>{
    await mongoose.connect(MONGODB_URI)
    console.log("Database is CONNECTED")
}