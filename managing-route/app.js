const express = require('express');
const indexRouter = require('./routes/index.route');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set("view engine","ejs");

let publicPath = path.join(__dirname,"public");

app.use(express.static(publicPath));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// http://localhost:3000/

app.use("/",indexRouter);

app.listen(3000,()=>{
    console.log('Server Started..');
});