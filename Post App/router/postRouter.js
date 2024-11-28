const {Router} = require('express')
const{createPost}= require('../controller/postController')
const router=Router()

router.post('/posts',createPost)

module.exports= router