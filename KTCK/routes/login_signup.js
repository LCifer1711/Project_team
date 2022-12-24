var express = require('express');
var router = express.Router();
var loginController = require('../controllers/login_signup_controller')
const { register } = require("../midwares/checkregister")
const { login } = require("../midwares/checklogin")

router.route("/login#login").post(login);
router.route("/login#register").post(register);
router.get('/', loginController.index);

module.exports = router;