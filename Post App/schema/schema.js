const {model,Schema} = require('mongoose')
let postSchema=new Schema({
    post:{
        type:String,
        default: "Path name"
    },
    posted_by:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required: true,
    }
    
},{
    timestamps:true
})

module.exports= model('post',postSchema)