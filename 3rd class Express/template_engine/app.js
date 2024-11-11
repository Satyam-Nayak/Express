//template engines
//handelbars


const express = require('express')
const app = express()
const {engine} = require('express-handlebars')


app.engine('handlebars',engine()) // to start the handlebar engine
app.set('view engine','handlebars') // to set the handlebar engine


app.get('/home',(req,res)=>{
    res.render('home', {title:'Home_page'})
})   //confused here

app.get('/webpageHome', (req,res)=>{
    res.render('webpage/home', {title:'Webpage Home'})
    res.render('webpage/about', {title:'Wepgae About'})
})



app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.listen(5000,err=>{
    if(err) throw err;
    console.log("server is running in port 5000")
})