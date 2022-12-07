const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("hello world it's me ALI AKBAR")
})

app.listen(3001,()=>{
    console.log("server start at port 3001");
})