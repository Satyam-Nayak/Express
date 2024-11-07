const { urlencoded } = require('body-parser');
const express = require('express');
const app = express();
const mongodb = require('mongodb').MongoClient
let collection;
app.use(express.urlencoded({extended:true}))

let connectDb=async()=>{
    let connection = await mongodb.connect('mongodb://localhost:27017')
    let database = await connection.db('User_Details')
    collection= await database.createCollection
    ('User_Details')
    console.log("database is connected and collection is created")
}
connectDb()


app.get('/',(req,res)=>{
    res.send("hello server")
    })

    app.get('/user',(req,res)=>{
    res.send(`<fieldset>
        <form action="/user" method="post">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br>
            <label for="age">Age:</label>
            <input type="text" id="age" name="age" required><br>
            <label for="email">email:</label>
            <input type="email" id="email" name="email" required><br>
            <label for="pswd">Password:</label>
            <input type="password" id="pswd" name="pswd"><br>
            <button type="submit">submit</button>
        </form>
    </fieldset>`)
})

app.post('/user',async(req,res)=>{
    let data=await collection.insertOne(req.body)
    console.log(data);
    // console.log(req.body);  it post all the data in the terminal
    res.send(req.body)
})

app.get('/userdetails',async(req,res)=>{
    let userData = await collection.find().toArray()
    let output="";
    userData?.map(data=>{
        output+=`<h1>${data.name}</h1>
        <p>${data.age}</p>
        <p>${data.email}</p>
        <p>${data.pswd}</p>`
    })
    res.send(output)
})



app.listen(3005,err=>{
    if(err) throw err;
    console.log('Server is running on port 3001 http://localhost:3005/ ')
})