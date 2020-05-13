require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const reviewRouter = require('./routers/review.router')
const cors = require('cors');


const app = express()
const port = process.env.POST || 5000;

app.use(cors())
app.use(bodyParser.json())

const url = process.env.MONGOOSE_URL
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true} )
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Mongooes data connection successfully")
})
app.get('/',(req,res) => {
    res.send('This is server API');
})
app.use('/review', reviewRouter);


app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`)
})