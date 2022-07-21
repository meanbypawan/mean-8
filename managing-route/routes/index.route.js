const express = require('express');
const indexController = require('../controller/index.controller');
const router = express.Router();

const {  body } = require('express-validator');
// http://localhost:3000/
router.get("/",indexController.indexPage);

// http://localhost:3000/about
router.get("/about",indexController.aboutPage);

router.get("/contact",indexController.contactPage);

router.get("/signin",indexController.signin);

router.get("/signup",indexController.signup);

// request-->email,password
router.post("/signup",
body('email','please enter email').isEmail(),
body('password','please enter password').notEmpty(),indexController.signupUser);

module.exports = router;
