const express = require('express')
const app = express()
require("dotenv").config()
app.get('/', (req, res) => {
    res.send("hello world it's me ALI AKBAR")
})

app.listen(process.env.PORT,()=>{
    console.log("server start at port 3001");
})