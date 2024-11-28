const postSchema= require('../schema/schema')
let createPost = async(req,res)=>{
    let payload=await postSchema.create(req.body)
    res.status(201).json({success:true,message:'Successfully insreted',payload})
}