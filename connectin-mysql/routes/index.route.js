const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const indexController = require('../controller/index.controller');
router.get("/",indexController.indexPage);
router.get("/add-user",indexController.addUser);
router.post("/add-user",
body('name','Name is required').notEmpty(),
body('mobile','Mobile number is required').notEmpty(),
body('mobile','Mobile must be numeric').isNumeric(),
body('age','Age is required').notEmpty(),
body('age','Invalid age value').isNumeric()
,indexController.saveUser);

router.get("/user-list",indexController.userList);
router.get('/signin',indexController.signInPage);
router.post("/signin",indexController.signIn);
module.exports = router;