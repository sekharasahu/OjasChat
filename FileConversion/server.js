const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload());

app.use(require('./route'));

app.listen(3000, (err)=>{
    if(err) throw err;
    console.log("Server is running 3000");
})