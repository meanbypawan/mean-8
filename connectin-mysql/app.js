const express = require('express');
const app = express();
require('dotenv').config();
const session = require('express-session');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index.route');

app.use(session({
    secret:'fdslafreirvcvcmer',
    saveUninitialized: true
}));

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

// http://localhost:3000/
app.use("/",indexRouter);
app.listen(process.env.PORT,()=>{
    console.log('server started at '+process.env.PORT);
});