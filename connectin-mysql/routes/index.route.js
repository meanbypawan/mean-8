const express = require('express');
const router = express.Router();
const indexController = require('../controller/index.controller');
router.get("/",indexController.indexPage);
router.get("/add-user",indexController.addUser);
router.post("/add-user",indexController.saveUser);
module.exports = router;