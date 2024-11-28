const {Router} = require('express')
const{createPost}= require('../controller/postController')
const router=Router()
const upload= require('../multer/multer')

router.post('/posts',upload.single('post'),createPost)

module.exports= router