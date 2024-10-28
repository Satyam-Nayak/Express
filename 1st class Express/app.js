const express = require('express')
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello Server')
})

app.get('/about', (req,res)=>{
    res.send('This is about page server')
})

app.listen(3001,err=>{
    if(err) throw err;
    console.log('Server is running on port 3001')
})
// how to create a server in express?
