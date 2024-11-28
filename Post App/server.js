const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT
const {connectDb} = require('./config/db')
const routing = require('./router/postRouter')
connectDb()

app.use(express.json())
app.use('/api',routing)

app.get('/', (req, res) => {
  res.send('Welcome to the Express Server!');
});

app.listen(PORT, err => {
    if (err) throw err;
  console.log('Server is running on 5000 "http://localhost:5000/"');
});
