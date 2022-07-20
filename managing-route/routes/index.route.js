const express = require('express');
const indexController = require('../controller/index.controller');
const router = express.Router();

// http://localhost:3000/
router.get("/",indexController.indexPage);

// http://localhost:3000/about
router.get("/about",indexController.aboutPage);

router.get("/contact",indexController.contactPage);

module.exports = router;
