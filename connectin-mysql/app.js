const express = require('express');
const app = express();
require('dotenv').config();
const indexRouter = require('./routes/index.route');
app.set("view engine","ejs");
// http://localhost:3000/
app.use("/",indexRouter);
app.listen(process.env.PORT,()=>{
    console.log('server started at '+process.env.PORT);
});