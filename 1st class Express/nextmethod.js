const express = require('express')
const app = express();

app.use((req,res,next)=>{
    console.log("hello")
    next();
})
app.use((req,res,next)=>{
    console.log("Express")
    next();
})

app.get('/',(req,res,next)=>{
    console.log("express")
    next();
},(req,res)=>{
    res.send(`<fieldset>
        <form action="/login" method="post">
            <label for="email">email:</label>
            <input type="email" id="email" name="email" required><br>
            <label for="pswd">Password:</label>
            <input type="password" id="pswd" name="pswd"><br>
            <button type="submit">submit</button>
        </form>
    </fieldset>`)
})
app.post('/login',(req,res)=>{
    console.log(req.body)
    res.send('login successful')
})

app.listen(3002,err=>{
    if(err) throw err;
    console.log('Server is running on port 3001 http://localhost:3002/ ')
})