const {Router} = require('express')
const router = Router()
const Cnt_Schema=require('../schema/schema')

router.get('/addContact',(req,res)=>{
    res.render('contact_App/addContact',{title:'Add_Contact'})
})

router.post('/addContact',async(req,res)=>{
    await Cnt_Schema.create(req.body)
    res.redirect('/home',302,{})
})

module.exports=router;