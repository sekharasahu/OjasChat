const express = require('express');
const app = express();

require('dotenv').config();

app.use(express.json());

app.use(require('./router/user.route'));

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`Server is running on ${process.env.PORT}`);
})