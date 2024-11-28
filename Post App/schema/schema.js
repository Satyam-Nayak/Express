const {model,Schema} = require('mongoose')
let postSchema=new Schema({
    post:{
        type:String,
        default: "https://cdn.pixabay.com/photo/2023/09/22/03/51/beautiful-8267949_1280.jpg"
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