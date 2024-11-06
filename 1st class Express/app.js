const express = require('express')
const app = express();
app.use(express.urlencoded({extended:true}))

app.get('/',(req,res)=>{
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

app.listen(3001,err=>{
    if(err) throw err;
    console.log('Server is running on port 3001 http://localhost:3001/ ')
})
// how to create a server in express?
