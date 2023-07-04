require("dotenv").config()
const connection = require('./connection');
const express = require('express');
const bodyParser = require('body-parser');
var app = express();
const cors = require('cors')
app.use(cors())
app.use(bodyParser.json())

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send("Hi We are Live");
})
// middleware
const English_routes = require('./routes/English')
app.use("/English",English_routes)
const Hindi_routes = require('./routes/Hindi')
app.use("/Hindi",Hindi_routes)

app.listen(PORT,()=>{
    console.log('express server is running on port 3000');
})