const {Router} = require('express')
const router = Router()
const Cnt_Schema=require('../schema/schema')


const fs = require('fs')
router.get('/style',(req,res)=>{
    fs.readFile('./public/addContact.css',(err,data)=>{
        if(err) throw err;
        res.end(data)
    })
})



router.get('/addContact',(req,res)=>{
    res.render('contact_App/addContact',{title:'Add_Contact'})
})

router.post('/addContact',async(req,res)=>{
    await Cnt_Schema.create(req.body)
    res.redirect('/home',302,{})
})

router.get('/allContact',async(req,res)=>{
    let payload = await Cnt_Schema.find()
    res.render('contact_App/cnt_list',{title:'All-Contacts'},payload)
})


module.exports=router;