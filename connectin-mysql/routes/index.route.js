const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const indexController = require('../controller/index.controller');
const auth = require('../middleware/authorization');
router.get("/",indexController.indexPage);

router.get("/add-user",auth.isAuthenticate,indexController.addUser);

router.post("/add-user",auth.isAuthenticate,
body('name','Name is required').notEmpty(),
body('mobile','Mobile number is required').notEmpty(),
body('mobile','Mobile must be numeric').isNumeric(),
body('age','Age is required').notEmpty(),
body('age','Invalid age value').isNumeric()
,indexController.saveUser);

router.get("/user-list",auth.isAuthenticate,indexController.userList);
router.get('/signin',indexController.signInPage);
router.post("/signin",indexController.signIn);
router.get("/signout",indexController.signout);
module.exports = router;