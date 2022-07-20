const express = require('express');
const indexRouter = require('./routes/index.route');
const path = require('path');
const app = express();

app.set("view engine","ejs");
let publicPath = path.join(__dirname,"public");
app.use(express.static(publicPath));
// http://localhost:3000/
app.use("/",indexRouter);

app.listen(3000,()=>{
    console.log('Server Started..');
});